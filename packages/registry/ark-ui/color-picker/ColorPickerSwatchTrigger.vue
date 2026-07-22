<script setup lang="ts">
import { ColorPicker, type ColorPickerSwatchTriggerProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerSwatchTriggerProps & { class?: HTMLAttributes["class"] }>();

const swatchTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.SwatchTrigger
    v-bind="swatchTriggerProps"
    :class="cn(
      'flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 outline-none',
      'transition-transform duration-100 ease-out',
      'focus-visible:shadow-[0_0_0_2px_var(--demo-coral-focus-ring)]',
      props.class,
    )"
    data-slot="color-picker-swatch-trigger"
  >
    <slot />
  </ColorPicker.SwatchTrigger>
</template>
