<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Content
    :class="cn(
      '[--arrow-background:var(--popover)] [--arrow-size:10px]',
      'relative z-[calc(50+var(--layer-index,0))]',
      'flex w-80 flex-col gap-1 rounded-md border border-accent bg-popover p-5 outline-none',
      'drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
      'data-[type=dialog]:w-[400px]',
      'data-[type=floating]:w-[360px]',
      props.class,
    )"
    data-slot="tour-content"
  >
    <slot />
  </Tour.Content>
</template>

<style scoped>
[data-state="open"] {
  animation: tour-scale-fade-in 150ms ease-in-out;
}

[data-state="closed"] {
  animation: tour-scale-fade-out 100ms ease-in-out;
}

@keyframes tour-scale-fade-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes tour-scale-fade-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.96);
  }
}
</style>
