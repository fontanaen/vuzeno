import fs from "node:fs";
import path from "node:path";

const registryRoot = path.join(import.meta.dir, "..");
const root = path.join(registryRoot, "../..");
const docsRoot = path.join(root, "apps/docs/content/docs/components");
const demosRoot = path.join(root, "apps/docs/app/components/demo");
const arkRoot = path.join(registryRoot, "ark-ui");

const PREFIX_ALIASES: Record<string, string[]> = {
  "progress-circular": ["ProgressCircular", "Progress"],
};

const HELPER_OWNERS: Record<string, string> = {
  "DialogCallerDeleteConfirmDialog.vue": "dialog-caller",
  "DialogCallerFormDialog.vue": "dialog-caller",
  "DialogCallerUnsavedConfirmDialog.vue": "dialog-caller",
  "AlertInnerShadowDemo.vue": "alert",
};

function kebabToPascal(kebab: string) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function pascalToKebab(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function demoToExampleName(demoName: string, component: string) {
  const withoutDemo = demoName.replace(/Demo$/, "");
  const prefixes = PREFIX_ALIASES[component] ?? [kebabToPascal(component)];

  for (const prefix of prefixes) {
    if (withoutDemo === prefix) {
      return "basic";
    }
    if (withoutDemo.startsWith(prefix)) {
      const rest = withoutDemo.slice(prefix.length);
      if (rest) {
        return pascalToKebab(rest);
      }
    }
  }

  return pascalToKebab(withoutDemo);
}

function helperToExampleName(fileName: string, component: string) {
  const base = fileName.replace(/\.vue$/, "");
  if (base.endsWith("Demo")) {
    return demoToExampleName(base, component);
  }

  const prefix = kebabToPascal(component);
  if (base.startsWith(prefix)) {
    const rest = base.slice(prefix.length);
    if (rest) {
      return pascalToKebab(rest);
    }
  }

  return pascalToKebab(base);
}

function ensureExamplesDir(component: string) {
  const dir = path.join(arkRoot, component, "examples");
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

function moveDemoFile(sourceName: string, component: string, exampleName: string) {
  const sourcePath = path.join(demosRoot, `${sourceName}.vue`);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`MISSING demo: ${sourceName}.vue (for ${component}/${exampleName})`);
    return null;
  }

  const targetDir = ensureExamplesDir(component);
  const targetPath = path.join(targetDir, `${exampleName}.vue`);
  if (fs.existsSync(targetPath)) {
    console.warn(`SKIP exists: ${component}/examples/${exampleName}.vue`);
    fs.unlinkSync(sourcePath);
    return targetPath;
  }

  fs.renameSync(sourcePath, targetPath);
  return targetPath;
}

function rewriteDialogCallerImports(filePath: string) {
  let content = fs.readFileSync(filePath, "utf8");
  const next = content
    .replaceAll('./DialogCallerDeleteConfirmDialog.vue', "./delete-confirm-dialog.vue")
    .replaceAll('./DialogCallerFormDialog.vue', "./form-dialog.vue")
    .replaceAll('./DialogCallerUnsavedConfirmDialog.vue', "./unsaved-confirm-dialog.vue");

  if (next !== content) {
    fs.writeFileSync(filePath, next);
  }
}

function migrateMarkdown(fileName: string) {
  const component = fileName.replace(/\.md$/, "");
  const filePath = path.join(docsRoot, fileName);
  let content = fs.readFileSync(filePath, "utf8");

  if (/::component-preview\n---\ncomponent:\s*/.test(content)) {
    return { component, moved: 0, updated: 0 };
  }

  const previewRe = /::component-preview\n---\nname:\s*([A-Za-z0-9]+)\n---\n::/g;
  const names = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = previewRe.exec(content))) {
    names.add(match[1]!);
  }

  let moved = 0;
  for (const demoName of names) {
    const exampleName = demoToExampleName(demoName, component);
    const target = moveDemoFile(demoName, component, exampleName);
    if (target) {
      moved++;
      if (component === "dialog-caller") {
        rewriteDialogCallerImports(target);
      }
    }
  }

  const updatedContent = content.replace(
    /::component-preview\n---\nname:\s*([A-Za-z0-9]+)\n---\n::/g,
    (_full, demoName: string) => {
      const exampleName = demoToExampleName(demoName, component);
      return `::component-preview\n---\ncomponent: ${component}\nname: ${exampleName}\n---\n::`;
    },
  );

  fs.writeFileSync(filePath, updatedContent);
  return { component, moved, updated: names.size };
}

function migrateHelpers() {
  for (const [fileName, component] of Object.entries(HELPER_OWNERS)) {
    const sourcePath = path.join(demosRoot, fileName);
    if (!fs.existsSync(sourcePath)) {
      continue;
    }

    const exampleName = helperToExampleName(fileName, component);
    const targetDir = ensureExamplesDir(component);
    const targetPath = path.join(targetDir, `${exampleName}.vue`);
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(sourcePath);
      continue;
    }

    fs.renameSync(sourcePath, targetPath);
    if (component === "dialog-caller") {
      rewriteDialogCallerImports(targetPath);
    }
    console.log(`helper ${fileName} -> ${component}/examples/${exampleName}.vue`);
  }
}

const markdownFiles = fs
  .readdirSync(docsRoot)
  .filter((name) => name.endsWith(".md"))
  .sort();

let totalMoved = 0;
let totalUpdated = 0;

for (const fileName of markdownFiles) {
  const result = migrateMarkdown(fileName);
  totalMoved += result.moved;
  totalUpdated += result.updated;
  if (result.updated > 0) {
    console.log(`${result.component}: ${result.updated} previews, ${result.moved} files moved`);
  }
}

migrateHelpers();

const remaining = fs.existsSync(demosRoot)
  ? fs.readdirSync(demosRoot).filter((name) => !name.startsWith("."))
  : [];

console.log(`\nMoved ${totalMoved} demo files, updated ${totalUpdated} preview refs`);
console.log(`Remaining under demo/: ${remaining.length}`);
if (remaining.length > 0) {
  for (const name of remaining) {
    console.log(`  - ${name}`);
  }
}
