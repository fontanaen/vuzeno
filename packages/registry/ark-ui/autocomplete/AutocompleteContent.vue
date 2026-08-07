<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Teleport to="body">
    <Combobox.Positioner class="bg-popover rounded-md" data-slot="autocomplete-positioner">
      <Combobox.Content
        :class="cn(
          'z-50 flex max-h-[min(var(--available-height,300px),300px)] min-w-(--reference-width) flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-md border border-input bg-popover p-1 shadow-md outline-none',
          'scroll-py-1 scrollbar-thin [scrollbar-color:var(--border)_var(--popover)]',
          props.class,
        )"
        data-slot="autocomplete-content"
      >
        <slot />
      </Combobox.Content>
    </Combobox.Positioner>
  </Teleport>
</template>

<style scoped>
[data-state="open"] {
  animation: autocomplete-scale-fade-in 150ms ease-out;
}

@keyframes autocomplete-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
