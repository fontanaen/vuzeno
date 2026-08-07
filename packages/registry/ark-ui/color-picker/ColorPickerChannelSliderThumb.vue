<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ChannelSliderThumb
    :class="cn(
      'size-3 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none',
      'shadow-[0_0_0_2px_white,0_0_0_3px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.15)]',
      'focus-visible:shadow-[0_0_0_2px_white,0_0_0_4px_var(--demo-coral-solid),0_1px_3px_rgba(0,0,0,0.15)]',
      props.class,
    )"
    data-slot="color-picker-channel-slider-thumb"
  >
    <slot />
  </ColorPicker.ChannelSliderThumb>
</template>
