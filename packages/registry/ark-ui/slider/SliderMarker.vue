<script setup lang="ts">
import { Slider, type SliderMarkerProps } from "@ark-ui/vue/slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SliderMarkerProps & { class?: HTMLAttributes["class"] }>();

const markerProps = reactiveOmit(props, "class");
</script>

<template>
  <Slider.Marker
    v-bind="markerProps"
    :class="cn(
      'relative text-xs leading-4 text-muted-foreground',
      'before:absolute before:-top-2.5 before:left-1/2 before:block before:size-1 before:-translate-x-1/2 before:rounded-full before:bg-border before:content-[\'\']',
      'data-[state=under-value]:before:bg-primary data-[state=at-value]:before:bg-primary',
      props.class,
    )"
    data-slot="slider-marker"
  >
    <slot />
  </Slider.Marker>
</template>
