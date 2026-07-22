<script setup lang="ts">
import { ColorPicker, type ColorPickerViewProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerViewProps & { class?: HTMLAttributes["class"] }>();

const viewProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.View
    v-bind="viewProps"
    :class="cn(
      'flex flex-col gap-2',
      '[[hidden]]:hidden',
      props.class,
    )"
    data-slot="color-picker-view"
  >
    <slot />
  </ColorPicker.View>
</template>
