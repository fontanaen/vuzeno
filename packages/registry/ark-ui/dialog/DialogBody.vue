<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn('mt-5 flex w-full flex-col items-start gap-3', props.class)"
    data-slot="dialog-body"
  >
    <slot />
  </div>
</template>
