<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    :class="cn('inline-flex min-h-6 items-center text-xs text-muted-foreground', props.class)"
    data-slot="autocomplete-tag-placeholder"
  >
    <slot />
  </span>
</template>
