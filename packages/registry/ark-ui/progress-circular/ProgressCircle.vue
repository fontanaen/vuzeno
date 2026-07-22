<script setup lang="ts">
import { Progress } from "@ark-ui/vue/progress";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Progress.Circle
    :class="cn(
      '[--size:4rem] [--thickness:0.375rem]',
      props.class,
    )"
    data-slot="progress-circle"
  >
    <slot />
  </Progress.Circle>
</template>

<style scoped>
[data-slot="progress-circle"][data-state="indeterminate"] {
  animation: progress-circle-spin 2s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  [data-slot="progress-circle"][data-state="indeterminate"] {
    animation: none;
  }
}

@keyframes progress-circle-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
