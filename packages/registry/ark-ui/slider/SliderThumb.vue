<script setup lang="ts">
import { Slider, type SliderThumbProps } from "@ark-ui/vue/slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SliderThumbProps & { class?: HTMLAttributes["class"] }>();

const thumbProps = reactiveOmit(props, "class");
</script>

<template>
  <Slider.Thumb
    v-bind="thumbProps"
    :class="cn(
      'flex w-6 h-4 items-center justify-center rounded-full border-2 border-primary bg-background outline-none shadow-xs',
      'transition-[box-shadow,transform] duration-150 ease-out',
      'focus-visible:shadow-[0_0_0_2px_var(--demo-coral-focus-ring)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="slider-thumb"
  >
    <slot />
  </Slider.Thumb>
</template>
