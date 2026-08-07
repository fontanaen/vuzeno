<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.Control
    :class="cn(
      'relative flex h-5 items-center',
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col',
      props.class,
    )"
    data-slot="slider-control"
  >
    <slot />
  </Slider.Control>
</template>
