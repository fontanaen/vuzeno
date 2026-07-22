<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.Range
    :class="cn(
      'h-full rounded-full bg-primary',
      'data-[orientation=vertical]:w-full',
      props.class,
    )"
    data-slot="slider-range"
  >
    <slot />
  </Slider.Range>
</template>
