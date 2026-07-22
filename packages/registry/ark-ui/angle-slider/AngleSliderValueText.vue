<script setup lang="ts">
import { AngleSlider, type AngleSliderValueTextProps } from "@ark-ui/vue/angle-slider";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<AngleSliderValueTextProps & { class?: HTMLAttributes["class"] }>();

const valueTextProps = reactiveOmit(props, "class");
</script>

<template>
  <AngleSlider.ValueText
    v-bind="valueTextProps"
    :class="cn(
      'text-sm font-medium leading-none text-foreground tabular-nums',
      props.class,
    )"
    data-slot="angle-slider-value-text"
  />
</template>
