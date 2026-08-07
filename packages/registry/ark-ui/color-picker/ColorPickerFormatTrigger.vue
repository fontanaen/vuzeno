<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.FormatTrigger
    :class="cn(
      'inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-transparent px-3 font-[inherit] text-sm font-medium text-foreground outline-none',
      'transition-[background,border-color] duration-150 ease-out',
      '[&:hover:not(:disabled)]:bg-muted',
      'focus-visible:border-ring focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      props.class,
    )"
    data-slot="color-picker-format-trigger"
  >
    <slot />
  </ColorPicker.FormatTrigger>
</template>
