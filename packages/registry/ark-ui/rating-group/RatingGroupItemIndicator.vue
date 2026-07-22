<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    :class="cn(
      'relative inline-flex size-5',
      '[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full',
      '[&_[data-bg]]:text-muted-foreground',
      '[&_[data-fg]]:text-primary [&_[data-fg]]:[clip-path:inset(0_0_0_0)]',
      'data-[half]:[&_[data-fg]]:[clip-path:inset(0_50%_0_0)]',
      '[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]',
      props.class,
    )"
    data-slot="rating-group-item-indicator"
  >
    <slot />
  </span>
</template>
