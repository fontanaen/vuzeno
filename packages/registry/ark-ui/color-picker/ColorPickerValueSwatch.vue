<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ValueSwatch
    :class="cn(
      'shrink-0 size-8 overflow-hidden rounded-md shadow-[0_0_0_1px_var(--border)]',
      'in-data-[slot=color-picker-swatch]:size-full in-data-[slot=color-picker-swatch]:max-h-none in-data-[slot=color-picker-swatch]:max-w-none',
      props.class,
    )"
  >
    <slot />
  </ColorPicker.ValueSwatch>
</template>
