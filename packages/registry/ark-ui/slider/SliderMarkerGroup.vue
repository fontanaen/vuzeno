<script setup lang="ts">
import { Slider } from "@ark-ui/vue/slider";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Slider.MarkerGroup
    :class="cn(
      'mt-2 flex justify-between',
      'data-[orientation=vertical]:mt-0 data-[orientation=vertical]:ms-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col',
      props.class,
    )"
    data-slot="slider-marker-group"
  >
    <slot />
  </Slider.MarkerGroup>
</template>
