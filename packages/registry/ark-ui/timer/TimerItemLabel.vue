<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <span
    :class="cn('text-xs text-muted-foreground', props.class)"
    data-slot="timer-item-label"
  >
    <slot />
  </span>
</template>
