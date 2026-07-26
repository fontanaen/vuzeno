<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.div
    data-slot="skeleton"
    :class="
      cn(
        'relative overflow-hidden rounded-md bg-muted',
        props.class,
      )
    "
  />
</template>

<style scoped>
@keyframes skeleton-shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

[data-slot="skeleton"]::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    color-mix(in oklab, var(--foreground) 12%, transparent),
    transparent
  );
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  [data-slot="skeleton"]::after {
    animation: none;
  }
}
</style>
