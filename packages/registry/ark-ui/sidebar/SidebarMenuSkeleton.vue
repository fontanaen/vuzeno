<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    showIcon?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    showIcon: false,
  },
);
</script>

<template>
  <div
    data-slot="sidebar-menu-skeleton"
    data-sidebar="menu-skeleton"
    :class="cn('flex h-8 items-center gap-2 rounded-md px-2', props.class)"
  >
    <div
      v-if="showIcon"
      class="size-4 shrink-0 animate-pulse rounded-md bg-sidebar-accent"
    />
    <div class="h-4 max-w-(--skeleton-width) flex-1 animate-pulse rounded-md bg-sidebar-accent" />
  </div>
</template>
