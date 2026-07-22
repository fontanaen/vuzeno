<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Teleport to="body">
    <Select.Positioner class="bg-popover rounded-md" data-slot="select-positioner">
      <Select.Content
        :class="cn(
          'z-50 flex max-h-[min(var(--available-height,300px),300px)] min-w-(--reference-width) flex-col gap-0 overflow-y-auto overscroll-contain rounded-md border border-input bg-popover p-1 shadow-md outline-none',
          'scroll-py-1 scrollbar-thin [scrollbar-color:var(--border)_var(--popover)]',
          props.class,
        )"
        data-slot="select-content"
      >
        <slot />
      </Select.Content>
    </Select.Positioner>
  </Teleport>
</template>

<style scoped>
[data-state="open"] {
  animation: select-scale-fade-in 150ms ease-out;
}

[data-state="closed"] {
  animation: select-scale-fade-out 100ms ease-in;
}

@keyframes select-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes select-scale-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
