<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const demoComponent = defineAsyncComponent({
  loader: () => import(`~/components/demo/${props.name}.vue`),
});

const demoComponentRaw = (await import(`~/components/demo/${props.name}.vue?raw`)).default;
</script>

<template>
  <div class="flex flex-col border border-border rounded-xl overflow-hidden my-4">
    <div class="flex items-center justify-center bg-background px-4 py-12 not-prose min-h-40">
      <ClientOnly>
        <component :is="demoComponent" />
      </ClientOnly>
    </div>

    <div class="h-96 overflow-hidden">
      <div class="relative h-full overflow-y-auto **:data-pretty-code-figure:m-0! **:data-pretty-code-figure:rounded-t-none! **:data-pretty-code-figure:border-t">
        <ProsePre v-if="demoComponentRaw" meta="showLineNumbers" language="vue" :code="demoComponentRaw" />
      </div>
    </div>
  </div>
</template>