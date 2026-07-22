<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="cn('flex flex-col items-center gap-0', props.class)"
    data-slot="timer-item-group"
  >
    <slot />
  </div>
</template>
