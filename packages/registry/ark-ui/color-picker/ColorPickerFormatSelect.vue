<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.FormatSelect
    :class="cn(
      'box-border h-9 cursor-pointer rounded-md border border-input bg-transparent px-2 font-[inherit] text-sm text-foreground outline-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      props.class,
    )"
    data-slot="color-picker-format-select"
  >
    <slot />
  </ColorPicker.FormatSelect>
</template>
