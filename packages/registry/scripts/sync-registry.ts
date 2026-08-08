import fs from "node:fs";
import path from "node:path";

const root = path.join(import.meta.dir, "..");
const arkRoot = path.join(root, "ark-ui");
const registryPath = path.join(root, "registry.json");
const docsRoot = path.join(root, "../../apps/docs/content/docs/components");

const IGNORE_FILES = new Set([".DS_Store", "README.md"]);
const IGNORE_DIRS = new Set(["examples"]);
const IGNORE_DEP_PACKAGES = new Set(["vue", "@vuzeno/ui"]);
const KNOWN_NPM = new Set(["@ark-ui/vue", "@vueuse/core", "@internationalized/date", "libphonenumber-js", "cnfast", "class-variance-authority", "@lucide/vue", "reka-ui"]);
const REGISTRY_NAMESPACE = "@vuzeno";

const DEP_ORDER = ["@ark-ui/vue", "@vueuse/core", "@internationalized/date", "libphonenumber-js", "class-variance-authority", "@lucide/vue", "cnfast"];

type FileEntry = { path: string; type: "registry:component" };
type Item = {
  name: string;
  type: "registry:component";
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: FileEntry[];
};

type Registry = {
  $schema: string;
  name: string;
  homepage: string;
  items: Item[];
};

function titleCase(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function readDocsMeta(name: string): { title?: string; description?: string } {
  const file = path.join(docsRoot, `${name}.md`);
  if (!fs.existsSync(file)) {
    return {};
  }
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---")) {
    return {};
  }
  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return {};
  }
  const front = text.slice(3, end);
  const title = front.match(/^title:\s*(.+)$/m)?.[1]?.trim();
  const description = front.match(/^description:\s*(.+)$/m)?.[1]?.trim();
  return { title, description };
}

function listFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((name) => {
      if (IGNORE_FILES.has(name) || IGNORE_DIRS.has(name) || name.startsWith(".")) {
        return false;
      }
      return fs.statSync(path.join(dir, name)).isFile();
    })
    .sort((a, b) => a.localeCompare(b));
}

function packageName(spec: string): string | null {
  if (spec.startsWith(".") || spec.startsWith("@/") || spec.startsWith("~/") || spec.startsWith("#")) {
    return null;
  }
  if (spec.startsWith("@vuzeno/registry")) {
    return null;
  }
  if (spec.startsWith("@")) {
    const parts = spec.split("/");
    return `${parts[0]}/${parts[1]}`;
  }
  return spec.split("/")[0] ?? null;
}

function toRegistryDependency(name: string) {
  return `${REGISTRY_NAMESPACE}/${name}`;
}

function normalizeRegistryDependency(dep: string, knownNames: Set<string>) {
  if (dep.startsWith("@") || dep.startsWith("http://") || dep.startsWith("https://") || dep.startsWith("./") || dep.startsWith("../")) {
    return dep;
  }
  if (knownNames.has(dep)) {
    return toRegistryDependency(dep);
  }
  return dep;
}

function extractFromContent(content: string) {
  const deps = new Set<string>();
  const regDeps = new Set<string>();
  const fromRe = /from\s+["']([^"']+)["']/g;
  let match: RegExpExecArray | null;
  while ((match = fromRe.exec(content))) {
    const spec = match[1]!;
    const namespaced = spec.match(/^@vuzeno\/registry\/ui\/([a-z0-9-]+)/);
    if (namespaced) {
      regDeps.add(toRegistryDependency(namespaced[1]!));
      continue;
    }
    const relative = spec.match(/^\.\.\/([a-z0-9-]+)(?:\/|$)/);
    if (relative) {
      regDeps.add(toRegistryDependency(relative[1]!));
      continue;
    }
    const pkg = packageName(spec);
    if (pkg && KNOWN_NPM.has(pkg) && !IGNORE_DEP_PACKAGES.has(pkg)) {
      deps.add(pkg);
    }
  }
  return { deps, regDeps };
}

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8")) as Registry;
const existingByName = new Map(registry.items.map((item) => [item.name, item]));

if (existingByName.has("progress") && !existingByName.has("progress-circular")) {
  const progress = existingByName.get("progress")!;
  existingByName.set("progress-circular", {
    ...progress,
    name: "progress-circular",
    title: "Progress Circular",
    description: "Vue circular progress indicator for loading states and determinate completion percentages.",
  });
}
existingByName.delete("progress");
existingByName.delete("swap");

const folders = fs
  .readdirSync(arkRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const knownNames = new Set(folders);

const items: Item[] = [];

for (const name of folders) {
  const folder = path.join(arkRoot, name);
  const filesOnDisk = listFiles(folder);
  const files: FileEntry[] = filesOnDisk.map((fileName) => ({
    path: `ark-ui/${name}/${fileName}`,
    type: "registry:component",
  }));

  const deps = new Set<string>();
  const regDeps = new Set<string>();
  const selfDep = toRegistryDependency(name);
  for (const fileName of filesOnDisk) {
    const content = fs.readFileSync(path.join(folder, fileName), "utf8");
    const extracted = extractFromContent(content);
    for (const dep of extracted.deps) {
      deps.add(dep);
    }
    for (const reg of extracted.regDeps) {
      if (reg !== selfDep) {
        regDeps.add(reg);
      }
    }
  }

  deps.delete("reka-ui");

  const dependencies = DEP_ORDER.filter((dep) => deps.has(dep));
  for (const dep of [...deps].sort()) {
    if (!dependencies.includes(dep)) {
      dependencies.push(dep);
    }
  }

  const existing = existingByName.get(name);
  const docs = readDocsMeta(name);
  const title = existing?.title ?? docs.title ?? titleCase(name);
  let description = docs.description ?? existing?.description ?? `${title} component built on Ark UI.`;
  if (!description.endsWith(".")) {
    description += ".";
  }

  const mergedReg = new Set<string>();
  for (const dep of existing?.registryDependencies ?? []) {
    const normalized = normalizeRegistryDependency(dep, knownNames);
    if (normalized !== selfDep) {
      mergedReg.add(normalized);
    }
  }
  for (const dep of regDeps) {
    mergedReg.add(dep);
  }
  const registryDependencies = [...mergedReg].sort();

  items.push({
    name,
    type: "registry:component",
    title,
    description,
    dependencies,
    registryDependencies,
    files,
  });
}

const next: Registry = {
  $schema: registry.$schema,
  name: registry.name,
  homepage: registry.homepage,
  items,
};

fs.writeFileSync(registryPath, `${JSON.stringify(next, null, 2)}\n`);

let missing = 0;
for (const item of items) {
  for (const file of item.files) {
    if (!fs.existsSync(path.join(root, file.path))) {
      console.log("MISSING", file.path);
      missing++;
    }
  }
}

let omitted = 0;
for (const name of folders) {
  const item = items.find((entry) => entry.name === name)!;
  const listed = new Set(item.files.map((file) => path.basename(file.path)));
  for (const fileName of listFiles(path.join(arkRoot, name))) {
    if (!listed.has(fileName)) {
      console.log("OMITTED", name, fileName);
      omitted++;
    }
  }
}

console.log(`Wrote ${items.length} items`);
console.log("missing files:", missing);
console.log("omitted files:", omitted);
console.log(
  "legacy path refs:",
  items.filter((item) => item.files.some((file) => file.path.startsWith("default"))).map((item) => item.name),
);
