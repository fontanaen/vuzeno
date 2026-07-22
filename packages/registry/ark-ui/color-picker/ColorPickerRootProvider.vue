<script setup lang="ts">
import { ColorPicker, type ColorPickerRootProviderProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <ColorPicker.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-2 text-foreground',
      props.class,
    )"
    data-slot="color-picker-root-provider"
  >
    <slot />
    <ColorPicker.HiddenInput />
  </ColorPicker.RootProvider>
</template>
