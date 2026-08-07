<script setup lang="ts">
const props = defineProps<{
  component: string;
  name: string;
}>();

const exampleModules = import.meta.glob("../../../../../packages/registry/ark-ui/*/examples/*.vue");

function resolveExampleKey(component: string, name: string) {
  const suffix = `/ark-ui/${component}/examples/${name}.vue`;
  const key = Object.keys(exampleModules).find((path) => path.endsWith(suffix));
  if (!key) {
    throw new Error(`Example not found: ${component}/${name}`);
  }
  return key;
}

const exampleKey = resolveExampleKey(props.component, props.name);

const demoComponent = defineAsyncComponent({
  loader: () => {
    const loader = exampleModules[exampleKey];
    if (!loader) {
      throw new Error(`Example module missing: ${exampleKey}`);
    }
    return loader();
  },
});
</script>

<template>
  <component :is="demoComponent" />
</template>
