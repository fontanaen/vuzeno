<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn('mt-6 flex justify-end gap-3', props.class)"
    data-slot="dialog-actions"
  >
    <slot />
  </div>
</template>
