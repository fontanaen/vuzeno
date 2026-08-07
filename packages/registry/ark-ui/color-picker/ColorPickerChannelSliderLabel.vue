<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ChannelSliderLabel
    :class="cn(
      'text-sm font-medium leading-4 text-foreground',
      props.class,
    )"
    data-slot="color-picker-channel-slider-label"
  >
    <slot />
  </ColorPicker.ChannelSliderLabel>
</template>
