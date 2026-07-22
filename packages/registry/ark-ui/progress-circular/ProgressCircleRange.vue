<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.CircleRange
    :class="cn(
      'fill-none stroke-primary [stroke-linecap:round]',
      'transition-all duration-300 ease-out',
      props.class,
    )"
    data-slot="progress-circle-range"
  >
    <slot />
  </Progress.CircleRange>
</template>

<style scoped>
[data-state="indeterminate"] {
  animation: progress-circle-range-indeterminate 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  [data-state="indeterminate"] {
    animation: none;
  }
}

@keyframes progress-circle-range-indeterminate {
  0% {
    stroke-dasharray: 1px 181px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 91px 91px;
    stroke-dashoffset: -45px;
  }

  100% {
    stroke-dasharray: 91px 91px;
    stroke-dashoffset: -182px;
  }
}
</style>
