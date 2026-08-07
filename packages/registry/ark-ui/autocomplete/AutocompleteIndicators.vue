<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-0.5',
      props.class,
    )"
    data-slot="autocomplete-indicators"
  >
    <slot />
  </div>
</template>
