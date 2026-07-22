<script setup lang="ts">
import { Switch } from "@vuzeno/registry/ui/switch";
import { fixImport } from "../../lib/registry";

const props = defineProps<{
  name: string;
  folder?: string;
}>();

const showCode = ref(false);

const demoFolder = computed(() => props.folder ?? "demo");

const demoComponent = defineAsyncComponent({
  loader: () => import(`~/components/${demoFolder.value}/${props.name}.vue`),
});

const demoComponentRaw = fixImport((await import(`~/components/${demoFolder.value}/${props.name}.vue?raw`)).default);
</script>

<template>
  <div class="flex flex-col border border-border rounded-xl overflow-hidden my-4 dark:bg-muted/10">
    <div v-if="demoComponentRaw" class="flex items-center justify-end gap-2 text-xs p-2.5">
      <Switch.Root v-model:checked="showCode" size="sm">
        <Switch.Label>Show code</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </div>
    <div class="flex items-center justify-center px-4 py-12 not-prose min-h-40">
      <ClientOnly>
        <component :is="demoComponent" />
      </ClientOnly>
    </div>

    <div class="overflow-hidden" :style="{ height: showCode ? 'auto' : '0px' }">
      <div class="relative h-full overflow-y-auto **:data-pretty-code-figure:m-0! **:data-pretty-code-figure:rounded-t-none! **:data-pretty-code-figure:border-t">
        <ProsePre v-if="demoComponentRaw" meta="showLineNumbers" language="vue" :code="demoComponentRaw" />
      </div>
    </div>
  </div>
</template>