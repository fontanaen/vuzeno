<script setup lang="ts">
import { ColorPicker, type ColorPickerRootProps, type ColorPickerRootEmits } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { useForwardPropsEmits } from "@ark-ui/vue";

const props = defineProps<ColorPickerRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ColorPickerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorPicker.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-2 text-foreground',
      props.class,
    )"
    data-slot="color-picker"
  >
    <slot />
    <ColorPicker.HiddenInput />
  </ColorPicker.Root>
</template>
