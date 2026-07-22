<script setup lang="ts">
import { ColorPicker, type ColorPickerSwatchProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerSwatchProps & { class?: HTMLAttributes["class"] }>();

const swatchProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.Swatch
    v-bind="swatchProps"
    :class="cn(
      'relative grid size-6 shrink-0 place-items-center overflow-hidden rounded-md',
      props.class,
    )"
    data-slot="color-picker-swatch"
  >
    <slot />
  </ColorPicker.Swatch>
</template>
