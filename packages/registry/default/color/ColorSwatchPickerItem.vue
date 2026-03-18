<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { CheckIcon } from "lucide-vue-next";
import { ColorSwatchPickerItem, ColorSwatchPickerItemIndicator, type ColorSwatchPickerItemProps, ColorSwatchPickerItemSwatch, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  ColorSwatchPickerItemProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <ColorSwatchPickerItem v-bind="forwarded" class="relative">
    <ColorSwatchPickerItemSwatch :class="cn('size-6 rounded bg-[--reka-color-swatch-color] peer', props.class)" :style="{ backgroundColor: 'var(--reka-color-swatch-color)' }" />
    <ColorSwatchPickerItemIndicator class="text-white peer-data-[color-contrast=dark]:text-black absolute right-0.5 bottom-0.5">
      <slot>
        <CheckIcon class="size-3.5" />
      </slot>
    </ColorSwatchPickerItemIndicator>
  </ColorSwatchPickerItem>
</template>