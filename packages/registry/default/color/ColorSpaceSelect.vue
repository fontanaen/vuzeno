<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@vuzeno/ui/components/select";
import { cn } from "@vuzeno/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type ColorSpace } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: VariantProps<typeof variants>["size"];
    options?: { value: ColorSpace | "hex" | string; label: string }[];
  }>(),
  {
    size: "default",
    options: () => [
      { value: "hsl", label: "HSL" },
      { value: "rgb", label: "RGB" },
      { value: "hsb", label: "HSB" },
    ],
  },
);

const colorSpace = defineModel<ColorSpace | "hex" | string>();

const variants = cva("w-fit gap-2", {
  variants: {
    size: {
      default: "h-9 text-sm pl-2 pr-1",
      sm: "h-8 text-xs pl-2 pr-1",
      lg: "h-10 text-sm pl-3 pr-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const itemVariants = cva("focus:bg-accent-foreground/10", {
  variants: {
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-sm",
    },
    defaultVariants: {
      size: "default",
    },
  },
});
</script>

<template>
  <Select v-model="colorSpace">
    <SelectTrigger 
      :class="cn(
        variants({ size: props.size }),
        'focus:ring-offset-0 dark:bg-background/50',
        props.class
      )"
    >
      <SelectValue />
    </SelectTrigger>

    <SelectContent class="bg-accent">
      <SelectItem v-for="option in options" :key="option.value" :value="option.value" :class="itemVariants({ size: props.size })">
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>