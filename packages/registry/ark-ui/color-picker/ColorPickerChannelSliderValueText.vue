<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ChannelSliderValueText
    :class="cn(
      'text-sm leading-4 text-muted-foreground',
      props.class,
    )"
    data-slot="color-picker-channel-slider-value-text"
  >
    <slot />
  </ColorPicker.ChannelSliderValueText>
</template>
