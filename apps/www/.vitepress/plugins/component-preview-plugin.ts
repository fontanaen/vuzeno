import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

const __dirname = path.dirname(Bun.fileURLToPath(import.meta.url));
const DEMO_DIR = path.resolve(__dirname, "../components/demo");

const IMPORT_REWRITES: [RegExp, string][] = [
  [/@vuzeno\/registry\/ui\//g, "@/components/ui/"],
  [/@vuzeno\/ui\/components\//g, "@/components/ui/"],
];

const SELF_CLOSING_PATTERN = /<ComponentPreview\s+name="([^"]+)"\s*\/>/g;
const EMPTY_PAIR_PATTERN = /<ComponentPreview\s+name="([^"]+)"\s*>\s*<\/ComponentPreview>/g;

function rewriteImports(source: string): string {
  let result = source;
  for (const [pattern, replacement] of IMPORT_REWRITES) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function getDemoPath(name: string): string {
  return path.join(DEMO_DIR, `${name}.vue`);
}

async function readDemoSource(name: string): Promise<string | null> {
  const demoPath = getDemoPath(name);
  const file = Bun.file(demoPath);
  const exists = await file.exists();
  if (!exists) {
    console.warn(`[component-preview-plugin] Demo file not found: ${demoPath}`);
    return null;
  }
  return file.text();
}

function expandTag(name: string, rawSource: string): string {
  const source = rewriteImports(rawSource);
  return `<ComponentPreview name="${name}">

\`\`\`vue
${source}
\`\`\`

</ComponentPreview>`;
}

/** Transforms raw markdown by replacing ComponentPreview tags with expanded content. Uses node:fs for sync (Bun.file is async-only). */
export function preprocessComponentPreview2(markdown: string): string {
  let result = markdown;

  function replaceTag(_match: string, name: string): string {
    const demoPath = getDemoPath(name);
    if (!fs.existsSync(demoPath)) {
      console.warn(`[component-preview-plugin] Demo file not found: ${demoPath}`);
      return _match;
    }
    const rawSource = fs.readFileSync(demoPath, "utf-8");
    return expandTag(name, rawSource);
  }

  result = result.replace(SELF_CLOSING_PATTERN, replaceTag);
  result = result.replace(EMPTY_PAIR_PATTERN, replaceTag);
  return result;
}

function collectMatches(text: string, pattern: RegExp): Array<{ index: number; length: number; name: string }> {
  const matches: Array<{ index: number; length: number; name: string }> = [];
  const re = new RegExp(pattern.source, pattern.flags);
  let match = re.exec(text);
  while (match !== null) {
    matches.push({
      index: match.index,
      length: match[0].length,
      name: match[1],
    });
    match = re.exec(text);
  }
  return matches;
}

export function componentPreviewPlugin(): Plugin {
  return {
    name: "vitepress-component-preview",
    enforce: "pre",
    async transform(code, id) {
      const cleanId = id.split("?")[0];
      if (!cleanId.endsWith(".md")) return null;

      const addWatchFile = this.addWatchFile.bind(this);
      const selfClosing = collectMatches(code, SELF_CLOSING_PATTERN);
      const emptyPair = collectMatches(code, EMPTY_PAIR_PATTERN);
      const seen = new Set<number>();
      const matches = [...selfClosing, ...emptyPair]
        .filter((m) => {
          if (seen.has(m.index)) return false;
          seen.add(m.index);
          return true;
        })
        .sort((a, b) => a.index - b.index);

      if (matches.length === 0) return null;

      const replacements = await Promise.all(
        matches.map(async (m) => {
          const rawSource = await readDemoSource(m.name);
          if (rawSource === null) return null;
          addWatchFile(getDemoPath(m.name));
          return expandTag(m.name, rawSource);
        }),
      );

      let transformed = "";
      let lastIndex = 0;
      for (let i = 0; i < matches.length; i++) {
        const m = matches[i];
        const repl = replacements[i];
        transformed += code.slice(lastIndex, m.index);
        transformed += repl ?? code.slice(m.index, m.index + m.length);
        lastIndex = m.index + m.length;
      }
      transformed += code.slice(lastIndex);

      return {
        code: transformed,
        map: null,
      };
    },
  };
}
