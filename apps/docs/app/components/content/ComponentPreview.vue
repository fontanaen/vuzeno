<script setup lang="ts">
import { Switch } from "@vuzeno/registry/ui/switch";

const props = defineProps<{
  component: string;
  name: string;
}>();

const showCode = ref(false);
</script>

<template>
  <div class="flex flex-col border border-border rounded-xl overflow-hidden my-4 dark:bg-muted/10">
    <div class="flex items-center justify-end gap-2 text-xs p-2.5">
      <Switch.Root v-model:checked="showCode" size="sm">
        <Switch.Label>Show code</Switch.Label>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </div>
    <div class="flex items-center justify-center px-4 py-12 not-prose min-h-40">
      <ClientOnly>
        <ComponentPreviewDemo :component="props.component" :name="props.name" />
      </ClientOnly>
    </div>

    <div
      v-if="showCode"
      class="relative overflow-y-auto **:data-pretty-code-figure:m-0! **:data-pretty-code-figure:rounded-t-none! **:data-pretty-code-figure:border-t"
    >
      <ClientOnly>
        <ComponentPreviewCode :component="props.component" :name="props.name" />
      </ClientOnly>
    </div>
  </div>
</template>
