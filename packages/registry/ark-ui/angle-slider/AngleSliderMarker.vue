<script setup lang="ts">
import { AngleSlider, type AngleSliderMarkerProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderMarkerProps & { class?: HTMLAttributes["class"] }>();

const markerProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.Marker
    v-bind="markerProps"
    :class="cn(
      'absolute inset-y-0 left-[calc(50%-1px)] w-0.5',
      'before:absolute before:left-1/2 before:top-1.5 before:h-1 before:w-1 before:-translate-x-1/2 before:rounded-sm before:bg-border before:content-[\'\']',
      'data-[state=at-value]:before:bg-primary',
      'data-[state=under-value]:before:bg-muted',
      props.class,
    )"
    data-slot="angle-slider-marker"
  >
    <slot />
  </AngleSlider.Marker>
</template>
