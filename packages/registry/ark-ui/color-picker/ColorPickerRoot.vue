<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { ColorPicker, type ColorPickerRootEmits, type ColorPickerRootProps } from "@ark-ui/vue/color-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ColorPickerRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ColorPickerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorPicker.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col gap-2 text-foreground',
      props.class,
    )"
    data-slot="color-picker"
  >
    <slot />
    <ColorPicker.HiddenInput />
  </ColorPicker.Root>
</template>
