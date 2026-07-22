<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Positioner data-slot="color-picker-positioner">
    <ColorPicker.Content
      :class="cn(
        'relative z-[calc(var(--demo-popover-z-index)+var(--layer-index,0))] flex w-64 flex-col gap-3 rounded-lg border border-border bg-popover p-3 outline-none',
        'origin-[var(--transform-origin)] drop-shadow-md',
        props.class,
      )"
      data-slot="color-picker-content"
    >
      <slot />
    </ColorPicker.Content>
  </ColorPicker.Positioner>
</template>

<style scoped>
[data-state="open"] {
  animation: color-picker-scale-fade-in 150ms ease-in-out;
}

[data-state="closed"] {
  animation: color-picker-scale-fade-out 100ms ease-in-out;
}

@keyframes color-picker-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes color-picker-scale-fade-out {
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
