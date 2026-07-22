<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Label
    :class="cn(
      'text-sm font-medium leading-5 text-foreground select-none',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="color-picker-label"
  >
    <slot />
  </ColorPicker.Label>
</template>
