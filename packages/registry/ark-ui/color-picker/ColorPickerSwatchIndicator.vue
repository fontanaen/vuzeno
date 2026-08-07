<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.SwatchIndicator
    :class="cn(
      'absolute inset-0 flex items-center justify-center text-sm text-white',
      '[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="color-picker-swatch-indicator"
  >
    <slot />
  </ColorPicker.SwatchIndicator>
</template>
