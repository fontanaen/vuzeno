<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Range
    :class="cn(
      'h-full rounded-full bg-primary',
      'transition-[width] duration-300 ease-out',
      'data-[orientation=vertical]:w-full data-[orientation=vertical]:transition-[height]',
      'data-[state=indeterminate]:w-1/2',
      props.class,
    )"
    data-slot="progress-linear-range"
  >
    <slot />
  </Progress.Range>
</template>

<style scoped>
@keyframes indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

[data-state="indeterminate"] {
  animation: indeterminate 1.25s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  [data-state="indeterminate"] {
    animation: none;
  }
}
</style>
