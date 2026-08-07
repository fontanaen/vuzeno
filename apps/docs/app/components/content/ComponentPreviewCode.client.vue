<script setup lang="ts">
import { fixImport } from "../../lib/registry";

const props = defineProps<{
  component: string;
  name: string;
}>();

const exampleRawModules = import.meta.glob("../../../../../packages/registry/ark-ui/*/examples/*.vue", {
  query: "?raw",
  import: "default",
});

function resolveExampleKey(component: string, name: string) {
  const suffix = `/ark-ui/${component}/examples/${name}.vue`;
  const key = Object.keys(exampleRawModules).find((path) => path.endsWith(suffix));
  if (!key) {
    throw new Error(`Example not found: ${component}/${name}`);
  }
  return key;
}

const exampleKey = resolveExampleKey(props.component, props.name);
const code = ref("");

onMounted(async () => {
  const rawLoader = exampleRawModules[exampleKey];
  if (!rawLoader) {
    return;
  }

  code.value = fixImport((await rawLoader()) as string);
});
</script>

<template>
  <ProsePre v-if="code" meta="showLineNumbers" language="vue" :code="code" class="rounded-none border-none" />
</template>
