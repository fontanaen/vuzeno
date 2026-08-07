<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'absolute top-0 right-0 bottom-0 z-1 flex w-(--stepper-width,1.5rem) flex-col overflow-hidden py-0.5 mx-0.5',
      props.class,
    )"
    data-slot="number-input-trigger-group"
  >
    <slot />
  </div>
</template>
