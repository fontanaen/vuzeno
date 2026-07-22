<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn(
      'relative inline-flex items-center justify-center [--size:4rem]',
      props.class,
    )"
    data-slot="progress-circle-container"
  >
    <slot />
  </div>
</template>
