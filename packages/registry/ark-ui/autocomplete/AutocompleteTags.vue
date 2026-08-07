<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn('flex flex-wrap gap-2', props.class)"
    data-slot="autocomplete-tags"
  >
    <slot />
  </div>
</template>
