<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p data-slot="card-description" :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
