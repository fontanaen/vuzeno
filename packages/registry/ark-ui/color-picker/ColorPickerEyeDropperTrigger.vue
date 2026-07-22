<script setup lang="ts">
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ColorPicker.EyeDropperTrigger
    :class="cn(
      'flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-input bg-transparent text-foreground outline-none',
      'transition-[background,border-color] duration-150 ease-out',
      '[&:hover:not(:disabled)]:bg-muted',
      'focus-visible:border-ring focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      '[&_svg]:size-4',
      props.class,
    )"
    data-slot="color-picker-eye-dropper-trigger"
  >
    <slot />
  </ColorPicker.EyeDropperTrigger>
</template>
