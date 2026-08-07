<script lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva("flex items-center justify-center bg-secondary rounded-full overflow-hidden", {
  variants: {
    size: {
      sm: "size-7",
      default: "size-8",
      lg: "size-9",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
</script>

<script setup lang="ts">
import { Avatar } from "@ark-ui/vue/avatar";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"]; size?: VariantProps<typeof variants>["size"] }>();
</script>

<template>
  <Avatar.Root
    :class="cn(variants({ size: props.size }), props.class)"
    data-slot="avatar"
  >
    <slot />
  </Avatar.Root>
</template>
