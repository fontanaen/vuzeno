<script setup lang="ts">
import { ColorPicker, type ColorPickerChannelSliderProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerChannelSliderProps & { class?: HTMLAttributes["class"] }>();

const channelSliderProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.ChannelSlider
    v-bind="channelSliderProps"
    :class="cn(
      'relative h-2.5 flex-1 rounded',
      props.class,
    )"
    data-slot="color-picker-channel-slider"
  >
    <slot />
  </ColorPicker.ChannelSlider>
</template>
