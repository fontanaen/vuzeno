<script setup lang="ts">
import { ColorPicker, type ColorPickerChannelInputProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerChannelInputProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.ChannelInput
    :channel="props.channel"
    :checked="props.checked"
    :color="props.color"
    :as-child="props.asChild"
    :disabled="props.disabled"
    :class="cn(
      'box-border min-w-0 flex-1 h-9 rounded-md border border-input dark:bg-input/30 px-3 py-1 font-[inherit] text-sm leading-4 text-foreground outline-none',
      '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-disabled:opacity-50',
      'data-[channel=alpha]:w-16 data-[channel=alpha]:min-w-0 data-[channel=alpha]:flex-none',
      props.class,
    )"
    data-slot="color-picker-channel-input"
  >
    <slot />
  </ColorPicker.ChannelInput>
</template>
