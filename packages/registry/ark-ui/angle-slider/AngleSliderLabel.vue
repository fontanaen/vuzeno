<script setup lang="ts">
import { AngleSlider, type AngleSliderLabelProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.Label
    v-bind="labelProps"
    :class="cn(
      'text-[0.8125rem] font-medium tracking-wider text-foreground select-none',
      props.class,
    )"
    data-slot="angle-slider-label"
  >
    <slot />
  </AngleSlider.Label>
</template>
