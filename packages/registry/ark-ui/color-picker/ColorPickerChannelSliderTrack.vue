<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ChannelSliderTrack
    :class="cn(
      'h-2.5 w-full rounded',
      props.class,
    )"
    data-slot="color-picker-channel-slider-track"
  >
    <slot />
  </ColorPicker.ChannelSliderTrack>
</template>
