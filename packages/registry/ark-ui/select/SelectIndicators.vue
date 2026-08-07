<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'pointer-events-none absolute top-1/2 right-[0.725rem] flex -translate-y-1/2 items-center gap-2',
      props.class,
    )"
    data-slot="select-indicators"
  >
    <slot />
  </div>
</template>
