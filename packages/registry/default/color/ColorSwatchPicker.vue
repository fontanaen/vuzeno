<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { ColorSwatchPickerRoot, type ColorSwatchPickerRootEmits, type ColorSwatchPickerRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  ColorSwatchPickerRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ColorSwatchPickerRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorSwatchPickerRoot v-bind="forwarded" :class="cn('flex gap-2', props.class)">
    <slot />
  </ColorSwatchPickerRoot>
</template>