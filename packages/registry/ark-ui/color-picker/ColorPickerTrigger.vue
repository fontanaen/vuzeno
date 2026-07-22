<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Trigger
    :class="cn(
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="color-picker-trigger"
  >
    <slot />
  </ColorPicker.Trigger>
</template>
