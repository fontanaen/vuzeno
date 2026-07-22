<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center rounded-sm bg-muted px-2 py-1 text-xs leading-4 font-medium text-foreground',
      props.class,
    )"
    data-slot="autocomplete-tag"
  >
    <slot />
  </span>
</template>
