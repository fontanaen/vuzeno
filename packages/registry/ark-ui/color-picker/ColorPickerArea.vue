<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.Area
    :class="cn(
      'relative h-40 touch-none overflow-hidden rounded-md',
      props.class,
    )"
    data-slot="color-picker-area"
  >
    <slot />
  </ColorPicker.Area>
</template>
