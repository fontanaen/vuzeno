<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    :class="cn('block font-medium', props.class)"
    data-slot="autocomplete-item-title"
  >
    <slot />
  </span>
</template>
