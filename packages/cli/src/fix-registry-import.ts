import { readdir } from "node:fs/promises";
import { join } from "node:path";

const SHADCN_COMPONENTS_REGEX = /@vuzeno\/ui\/(components|lib|composables)\/([\w-]+(?:\/[\w-]+)*)/g;
const REGISTRY_REGEX = /@vuzeno\/registry\/(ui|lib)\/([\w-]+(?:\/[\w-]+)*)/g;
const REGISTRY_LIB_REGEX = /@vuzeno\/ui\/lib\/utils/g;

function componentsReplacement(match: string, kind: string, subpath: string) {
  return kind === "components" ? `@/components/ui/${subpath}` : match;
}

function registryReplacement(match: string, kind: string, subpath: string) {
  return kind === "ui" ? `@/components/${subpath}` : match;
}

function fixImport(content: string) {
  return content.replace(SHADCN_COMPONENTS_REGEX, componentsReplacement).replace(REGISTRY_LIB_REGEX, "@/lib/utils").replace(REGISTRY_REGEX, registryReplacement);
}

type RegistryJsonFile = {
  content?: string;
};

type RegistryJsonRoot = {
  files?: RegistryJsonFile[];
};

const defaultRegistryOutDir = () => join(import.meta.dir, "../../../apps/docs/public/r");

type FixRegistryImportsResult = {
  directory: string;
  jsonFiles: number;
  jsonFilesUpdated: number;
  embeddedFilesUpdated: number;
};

/**
 * Rewrites `@vuzeno/*` package imports inside embedded `files[].content` for each
 * `*.json` under the shadcn-vue registry build output (`apps/docs/public/r`).
 */
async function fixRegistryImports(outDir = defaultRegistryOutDir()): Promise<FixRegistryImportsResult> {
  let names: string[];
  try {
    names = await readdir(outDir);
  } catch (err) {
    const code = err && typeof err === "object" && "code" in err ? String((err as NodeJS.ErrnoException).code) : "";
    if (code === "ENOENT") {
      throw new Error(`Registry output directory not found: ${outDir}`);
    }
    throw err;
  }

  const jsonNames = names.filter((n) => n.endsWith(".json"));
  let jsonFilesUpdated = 0;
  let embeddedFilesUpdated = 0;

  for (const name of jsonNames) {
    const filePath = join(outDir, name);
    const raw = await Bun.file(filePath).text();
    const parsed = JSON.parse(raw) as RegistryJsonRoot;
    const files = parsed.files;
    if (!Array.isArray(files)) continue;

    let changed = false;
    for (const entry of files) {
      if (typeof entry.content !== "string") continue;
      const next = fixImport(entry.content);
      if (next !== entry.content) {
        entry.content = next;
        embeddedFilesUpdated++;
        changed = true;
      }
    }

    if (changed) {
      await Bun.write(filePath, `${JSON.stringify(parsed, null, 2)}\n`);
      jsonFilesUpdated++;
    }
  }

  return {
    directory: outDir,
    jsonFiles: jsonNames.length,
    jsonFilesUpdated,
    embeddedFilesUpdated,
  };
}

if (import.meta.main) {
  try {
    const result = await fixRegistryImports();
    console.log(`Fixed imports in ${result.jsonFilesUpdated}/${result.jsonFiles} JSON file(s) (${result.embeddedFilesUpdated} embedded file(s)) under ${result.directory}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
