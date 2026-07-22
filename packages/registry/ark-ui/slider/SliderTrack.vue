<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.Track
    :class="cn(
      'h-1.5 flex-1 overflow-hidden rounded-full bg-muted',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
      props.class,
    )"
    data-slot="slider-track"
  >
    <slot />
  </Slider.Track>
</template>
