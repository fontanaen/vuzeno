<script setup lang="ts">
import { AngleSlider, type AngleSliderMarkerGroupProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderMarkerGroupProps & { class?: HTMLAttributes["class"] }>();

const markerGroupProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.MarkerGroup
    v-bind="markerGroupProps"
    :class="cn('absolute inset-0 rounded-full pointer-events-none z-0', props.class)"
    data-slot="angle-slider-marker-group"
  >
    <slot />
  </AngleSlider.MarkerGroup>
</template>
