<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { AngleSlider, type AngleSliderThumbProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderThumbProps & { class?: HTMLAttributes["class"] }>();

const thumbProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.Thumb
    v-bind="thumbProps"
    :class="cn(
      'absolute inset-0 z-10 flex items-center justify-center outline-none focus-visible:[&_span]:outline-hidden focus-visible:[&_span]:ring-2 focus-visible:[&_span]:ring-ring/32 active:[&_span]:scale-110 active:[&_span]:ring-[3px] active:[&_span]:ring-ring/32',
      props.class,
    )"
  >
    <ark.span 
      class="absolute shrink-0 bg-white size-4 rounded-full shadow-xs/5 motion-reduce:transition-none! ring-2 ring-border transition-all hover:cursor-grab hover:ring-[3px]" 
      style="inset-block-start: calc(50% - 60px); inset-inline-start: calc(50% - 8px);"
    />
  </AngleSlider.Thumb>
</template>
