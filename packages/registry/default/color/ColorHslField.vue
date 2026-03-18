<script setup lang="ts">
import { InputGroup } from "@vuzeno/ui/components/input-group";
import { cn } from "@vuzeno/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type Color, ColorFieldInput, ColorFieldRoot } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: VariantProps<typeof variants>["size"];
  }>(),
  {
    size: "default",
  },
);

const color = defineModel<Color>();

const variants = cva("flex items-center gap-0 w-auto tabular-nums h-auto flex-none", {
  variants: {
    size: {
      default: "h-9 **:w-11",
      sm: "h-8 text-xs **:w-9",
      lg: "h-10 **:w-12",
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
      '**:text-center',
      'bg-background dark:bg-background/50',
      '**:data-[slot=input-group-control]:px-0',
      '**:has-[[data-slot=input-group-control]:focus-visible]:ring-0 **:has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0',

      // Focus state.
      'has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-transparent',

      props.class)
    "
  >
    <slot />
    
    <ColorFieldRoot :model-value="color" channel="hue" color-space="hsl" @update:color="color = $event">
      <ColorFieldInput data-slot="input-group-control" class="outline-none px-0" placeholder="h" />
    </ColorFieldRoot>

    <ColorFieldRoot :model-value="color" channel="saturation" color-space="hsl" @update:color="color = $event">
      <ColorFieldInput data-slot="input-group-control" class="outline-none px-0 border-x border-input dark:border-accent" placeholder="s" />
    </ColorFieldRoot>

    <ColorFieldRoot :model-value="color" channel="lightness" color-space="hsl" @update:color="color = $event">
      <ColorFieldInput data-slot="input-group-control" class="outline-none px-0 " placeholder="l" />
    </ColorFieldRoot>
  </InputGroup>
</template>