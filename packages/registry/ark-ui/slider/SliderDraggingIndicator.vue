<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.DraggingIndicator
    :class="cn(
      'pointer-events-none -top-7 rounded bg-popover px-2 py-1 text-xs font-medium leading-none whitespace-nowrap text-white',
      'transition-opacity duration-150 ease-out',
      props.class,
    )"
    data-slot="slider-dragging-indicator"
  />
</template>
