import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REGISTRY_ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(REGISTRY_ROOT, "../..");
const ARK_UI_ROOT = dirname(fileURLToPath(import.meta.resolve("@ark-ui/vue/package.json")));
const ARK_COMPONENTS = join(ARK_UI_ROOT, "dist/components");
const OUTPUT_ROOT = join(REGISTRY_ROOT, "ark-ui");
const DOCS_ROOT = join(REPO_ROOT, "apps/docs/content/docs/components");
const DEMOS_ROOT = join(REPO_ROOT, "apps/docs/app/components/demo");

const filterArg = process.argv.find((arg) => arg.startsWith("--component="));
const componentFilter = filterArg?.split("=")[1];

type ComponentMeta = {
  kebab: string;
  namespace: string;
  title: string;
  vueParts: string[];
  indexContent: string;
};

function kebabToPascal(kebab: string): string {
  return kebab
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function kebabToTitle(kebab: string): string {
  return kebab
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function partToKebab(part: string): string {
  return part.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function getDataSlot(kebab: string, partName: string): string {
  if (partName === "Root") {
    return kebab;
  }
  return `${kebab}-${partToKebab(partName)}`;
}

function getPartName(exportName: string, namespace: string): string {
  if (exportName.startsWith(namespace)) {
    return exportName.slice(namespace.length);
  }
  return exportName;
}

function parseVueExports(indexContent: string): string[] {
  const parts: string[] = [];
  const regex = /export \{ default as (\w+)[^}]*\} from '\.\/[^']+\.vue'/g;
  for (const match of indexContent.matchAll(regex)) {
    parts.push(match[1]);
  }
  return parts;
}

function rewriteIndexReexports(indexContent: string, importPath: string, namespace: string): string {
  const lines: string[] = [];

  for (const line of indexContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("//")) {
      continue;
    }

    if (/export \{ default as \w+/.test(trimmed)) {
      continue;
    }

    if (new RegExp(`export \\* as ${namespace} from`).test(trimmed)) {
      continue;
    }

    const rewritten = trimmed.replace(/from '\.\/[^']+'/g, `from '${importPath}'`).replace(/from "@zag-js\/[^"]+"/g, (match) => match.replace(/^from "/, `from "${importPath}"`).replace(/@zag-js\/[^"]+/, importPath));

    if (rewritten.includes("@zag-js/")) {
      lines.push(trimmed.replace(/from '@zag-js\/[^']+'/g, `from '${importPath}'`));
      continue;
    }

    lines.push(rewritten);
  }

  return lines.join("\n");
}

function generateNamespaceTs(meta: ComponentMeta): string {
  const imports = meta.vueParts.map((exportName) => `import ${exportName} from "./${exportName}.vue";`).join("\n");
  const entries = meta.vueParts
    .map((exportName) => {
      const key = getPartName(exportName, meta.namespace);
      return `  ${key}: ${exportName},`;
    })
    .join("\n");

  return `${imports}\n\nexport const ${meta.namespace} = {\n${entries}\n} as const;\n`;
}

function generateIndexTs(meta: ComponentMeta, importPath: string, usesNamespace: boolean): string {
  const lines: string[] = [];

  if (usesNamespace) {
    lines.push(`export { ${meta.namespace} } from "./${meta.kebab}";`);
  } else if (meta.vueParts.length === 1) {
    lines.push(`export { default as ${meta.vueParts[0]} } from "./${meta.vueParts[0]}.vue";`);
  } else {
    for (const exportName of meta.vueParts) {
      lines.push(`export { default as ${exportName} } from "./${exportName}.vue";`);
    }
  }

  const reexports = rewriteIndexReexports(meta.indexContent, importPath, meta.namespace);
  if (reexports) {
    lines.push("");
    lines.push(reexports);
  }

  return `${lines.join("\n")}\n`;
}

function buildCompositionTree(namespace: string, vueParts: string[], usesNamespace: boolean): string {
  const partNames = vueParts.map((name) => getPartName(name, namespace));
  const rootPart = partNames.find((part) => part === "Root") ?? partNames[0];
  const prefix = usesNamespace ? `${namespace}.` : `${namespace}`;
  const childParts = vueParts.filter((name) => getPartName(name, namespace) !== rootPart).map((name) => getPartName(name, namespace));

  if (childParts.length === 0) {
    return usesNamespace ? `${namespace}.${rootPart}` : `${namespace}${rootPart}`;
  }

  const lines = [usesNamespace ? `${namespace}.${rootPart}` : `${namespace}${rootPart}`];
  for (const child of childParts) {
    lines.push(`├── ${prefix}${child}`);
  }
  return lines.join("\n");
}

function generateDemo(meta: ComponentMeta, usesNamespace: boolean): string {
  const { kebab, namespace, vueParts } = meta;
  const importPath = `@vuzeno/registry/ui/${kebab}`;
  const has = (part: string) => vueParts.includes(`${namespace}${part}`);
  const part = (name: string) => (usesNamespace ? `${namespace}.${name}` : `${namespace}${name}`);

  if (usesNamespace && has("Root") && has("Item") && has("ItemTrigger") && has("ItemContent")) {
    return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
</script>

<template>
  <${part("Root")}>
    <${part("Item")} value="item-1">
      <${part("ItemTrigger")}>Section 1</${part("ItemTrigger")}>
      <${part("ItemContent")}>Content for section 1.</${part("ItemContent")}>
    </${part("Item")}>
  </${part("Root")}>
</template>
`;
  }

  if (usesNamespace && has("Root") && has("Trigger") && has("Content")) {
    return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
import { Button } from "@vuzeno/registry/ui/button";
</script>

<template>
  <${part("Root")}>
    <${part("Trigger")} as-child>
      <Button variant="outline" size="sm">Open ${meta.title}</Button>
    </${part("Trigger")}>
    ${has("Backdrop") ? `<${part("Backdrop")} />` : ""}
    ${has("Positioner") ? `<${part("Positioner")}>` : ""}
    <${part("Content")}>
      ${has("Title") ? `<${part("Title")}>${meta.title}</${part("Title")}>` : ""}
      ${has("Description") ? `<${part("Description")}>Example ${meta.title.toLowerCase()} content.</${part("Description")}>` : ""}
      ${has("CloseTrigger") ? `<${part("CloseTrigger")} as-child><Button variant="outline" size="sm">Close</Button></${part("CloseTrigger")}>` : ""}
    </${part("Content")}>
    ${has("Positioner") ? `</${part("Positioner")}>` : ""}
  </${part("Root")}>
</template>
`;
  }

  if (usesNamespace && has("Root") && has("Control") && has("Label")) {
    return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
</script>

<template>
  <${part("Root")}>
    <${part("Control")}>
      ${has("Indicator") ? `<${part("Indicator")} />` : ""}
    </${part("Control")}>
    <${part("Label")}>${meta.title}</${part("Label")}>
  </${part("Root")}>
</template>
`;
  }

  if (usesNamespace && has("Root") && has("Input")) {
    return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
</script>

<template>
  <${part("Root")}>
    ${has("Label") ? `<${part("Label")}>${meta.title}</${part("Label")}>` : ""}
    <${part("Input")} placeholder="Enter value" />
  </${part("Root")}>
</template>
`;
  }

  if (usesNamespace) {
    const rootPart = vueParts.find((name) => name.endsWith("Root")) ? "Root" : getPartName(vueParts[0], namespace);

    return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
</script>

<template>
  <${part(rootPart)}>
    ${meta.title} component
  </${part(rootPart)}>
</template>
`;
  }

  const exportName = vueParts[0];

  return `<script setup lang="ts">
import { ${exportName} } from "${importPath}";
</script>

<template>
  <${exportName}>
    ${meta.title} component
  </${exportName}>
</template>
`;
}

function generateWrapperSfc(exportName: string, namespace: string, kebab: string, importPath: string): string {
  const partName = getPartName(exportName, namespace);
  const dataSlot = getDataSlot(kebab, partName);

  return `<script setup lang="ts">
import { ${namespace} } from "${importPath}";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <${namespace}.${partName}
    v-bind="$attrs"
    :class="cn(props.class)"
    data-slot="${dataSlot}"
  >
    <slot />
  </${namespace}.${partName}>
</template>
`;
}

function generateDirectWrapperSfc(exportName: string, kebab: string, namespace: string, importPath: string): string {
  const partName = exportName.startsWith(namespace) ? getPartName(exportName, namespace) : exportName;
  const dataSlot = partName ? getDataSlot(kebab, partName) : kebab;

  return `<script setup lang="ts">
import { ${exportName} as Ark${exportName} } from "${importPath}";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Ark${exportName}
    v-bind="$attrs"
    :class="cn(props.class)"
    data-slot="${dataSlot}"
  >
    <slot />
  </Ark${exportName}>
</template>
`;
}

function generateDocPage(meta: ComponentMeta, usesNamespace: boolean): string {
  const composition = buildCompositionTree(meta.namespace, meta.vueParts, usesNamespace);
  const demoName = `${meta.namespace}Demo`;

  return `---
title: ${meta.title}
description: ${meta.title} component built on Ark UI.
tag: new
---

::component-preview
---
name: ${demoName}
---
::

## Installation

Install from the Vuzeno registry with the shadcn-vue CLI:

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/${meta.kebab}.json
exec: true
---
::

## Usage

\`\`\`vue
<script setup lang="ts">
import { ${meta.namespace} } from "@vuzeno/registry/ui/${meta.kebab}";
</script>

<template>
  <${meta.namespace}.Root>
    <!-- … -->
  </${meta.namespace}.Root>
</template>
\`\`\`

## Composition

\`\`\`
${composition}
\`\`\`

## API

See [Ark UI ${meta.title} docs](https://ark-ui.com/vue/docs/components/${meta.kebab}) for full props and examples.
`;
}

function generateRegistryItem(meta: ComponentMeta, usesNamespace: boolean) {
  const files = meta.vueParts.map((part) => ({
    path: `ark-ui/${meta.kebab}/${part}.vue`,
    type: "registry:component",
  }));

  if (usesNamespace) {
    files.push({
      path: `ark-ui/${meta.kebab}/${meta.kebab}.ts`,
      type: "registry:component",
    });
  }

  files.push({
    path: `ark-ui/${meta.kebab}/index.ts`,
    type: "registry:component",
  });

  return {
    name: meta.kebab,
    type: "registry:component",
    title: meta.title,
    description: `${meta.title} component built on Ark UI.`,
    dependencies: ["@ark-ui/vue"],
    registryDependencies: [],
    files,
  };
}

async function discoverComponents(): Promise<string[]> {
  const mainIndex = await readFile(join(ARK_COMPONENTS, "index.d.ts"), "utf-8");
  const components: string[] = [];

  for (const match of mainIndex.matchAll(/export \* from '\.\/([^/]+)\/index\.js'/g)) {
    components.push(match[1]);
  }

  for (const match of mainIndex.matchAll(/export \* from '\.\/(factory)\.js'/g)) {
    components.push(match[1]);
  }

  return components.sort();
}

async function loadComponentMeta(kebab: string): Promise<ComponentMeta> {
  const namespace = kebabToPascal(kebab);
  const indexPath = join(ARK_COMPONENTS, kebab, "index.d.ts");
  const factoryPath = join(ARK_COMPONENTS, `${kebab}.d.ts`);

  let indexContent: string;
  try {
    indexContent = await readFile(indexPath, "utf-8");
  } catch {
    indexContent = await readFile(factoryPath, "utf-8");
  }

  const vueParts = parseVueExports(indexContent);

  return {
    kebab,
    namespace,
    title: kebabToTitle(kebab),
    vueParts,
    indexContent,
  };
}

async function generateComponent(meta: ComponentMeta) {
  const outputDir = join(OUTPUT_ROOT, meta.kebab);
  const importPath = `@ark-ui/vue/${meta.kebab}`;
  const usesNamespace = meta.indexContent.includes(`export * as ${meta.namespace} from`);

  await mkdir(outputDir, { recursive: true });

  for (const exportName of meta.vueParts) {
    const sfc = usesNamespace ? generateWrapperSfc(exportName, meta.namespace, meta.kebab, importPath) : generateDirectWrapperSfc(exportName, meta.kebab, meta.namespace, importPath);

    await writeFile(join(outputDir, `${exportName}.vue`), sfc);
  }

  if (meta.vueParts.length === 0) {
    const reexports = rewriteIndexReexports(meta.indexContent, importPath, meta.namespace);
    await writeFile(join(outputDir, "index.ts"), `${reexports}\n`);
  } else {
    if (usesNamespace) {
      await writeFile(join(outputDir, `${meta.kebab}.ts`), generateNamespaceTs(meta));
    }

    await writeFile(join(outputDir, "index.ts"), generateIndexTs(meta, importPath, usesNamespace));
  }

  await mkdir(DOCS_ROOT, { recursive: true });
  await mkdir(DEMOS_ROOT, { recursive: true });

  if (meta.vueParts.length > 0) {
    await writeFile(join(DOCS_ROOT, `${meta.kebab}.md`), generateDocPage(meta, usesNamespace));
    await writeFile(join(DEMOS_ROOT, `${meta.namespace}Demo.vue`), generateDemo(meta, usesNamespace));
  } else {
    await writeFile(
      join(DOCS_ROOT, `${meta.kebab}.md`),
      `---
title: ${meta.title}
description: ${meta.title} utilities from Ark UI.
tag: new
---

## Installation

::installation-tabs
---
command: shadcn-vue@latest add https://vuzeno.com/r/${meta.kebab}.json
exec: true
---
::

## API

See [Ark UI ${meta.title} docs](https://ark-ui.com/vue/docs/components/${meta.kebab}) for usage.
`,
    );
  }

  return generateRegistryItem(meta, usesNamespace);
}

async function main() {
  const components = await discoverComponents();
  const selected = componentFilter ? components.filter((name) => name === componentFilter) : components;

  if (selected.length === 0) {
    throw new Error(`Component not found: ${componentFilter}`);
  }

  if (!componentFilter) {
    await rm(OUTPUT_ROOT, { recursive: true, force: true });
    await rm(DOCS_ROOT, { recursive: true, force: true });
  }

  const registryItems = [];

  for (const kebab of selected) {
    const meta = await loadComponentMeta(kebab);
    const item = await generateComponent(meta);
    registryItems.push(item);
    console.log(`Generated ${kebab} (${meta.vueParts.length} parts)`);
  }

  if (!componentFilter) {
    const existingRegistry = JSON.parse(await readFile(join(REGISTRY_ROOT, "registry.json"), "utf-8"));

    existingRegistry.items = registryItems;

    await writeFile(join(REGISTRY_ROOT, "registry.json"), `${JSON.stringify(existingRegistry, null, 2)}\n`);

    console.log(`\nUpdated registry.json with ${registryItems.length} items`);
  }

  console.log(`\nDone. Generated ${selected.length} component(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
