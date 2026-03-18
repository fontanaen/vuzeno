<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { type Color, ColorSwatch } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  color?: Color | string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ColorSwatch :color="color" :class="cn('size-4 rounded-sm', props.class)" :style="{ backgroundColor: 'var(--reka-color-swatch-color)' }">
    <slot />
  </ColorSwatch>
</template>