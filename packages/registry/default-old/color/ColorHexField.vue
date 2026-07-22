<script setup lang="ts">
import { cn } from "cnfast";
import { cva, type VariantProps } from "class-variance-authority";
import { ColorFieldInput, ColorFieldRoot, colorToString } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "../../ark-ui/input-group";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: VariantProps<typeof variants>["size"];
  }>(),
  {
    size: "default",
  },
);

const color = defineModel<string>();

const variants = cva("flex items-center gap-0 w-auto tabular-nums h-auto flex-none", {
  variants: {
    size: {
      default: "h-9",
      sm: "h-8 text-xs",
      lg: "h-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
</script>

<template>
  <InputGroup 
    :class="cn(
      variants({ size: props.size }), 
      '**:w-27 **:text-center',
      'bg-background dark:bg-background/50',
      '**:data-[slot=input-group-control]:px-0',
      '**:has-[[data-slot=input-group-control]:focus-visible]:ring-0 **:has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0',

      // Focus state.
      'has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-transparent',

      props.class)
    "
  >
    <ColorFieldRoot :model-value="color" color-space="hsl" @update:color="color = colorToString($event, 'hex')">
      <ColorFieldInput data-slot="input-group-control" class="outline-none px-0" placeholder="#000000" />
    </ColorFieldRoot>

    <slot />
  </InputGroup>
</template>