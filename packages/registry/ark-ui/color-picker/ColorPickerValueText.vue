<script setup lang="ts">
import { ColorPicker, type ColorPickerValueTextProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerValueTextProps & { class?: HTMLAttributes["class"] }>();

const valueTextProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.ValueText
    v-bind="valueTextProps"
    :class="cn(
      'text-sm font-medium leading-5 text-foreground',
      props.class,
    )"
    data-slot="color-picker-value-text"
  />
</template>
