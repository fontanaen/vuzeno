<script setup lang="ts">
import { Select, type SelectTriggerProps } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends SelectTriggerProps, InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <Select.Control class="relative flex w-full items-center gap-2" data-slot="select-control">
    <Select.Trigger
      :class="cn(
        inputVariants({ size: props.size }),
        'flex items-center justify-between gap-2 select-none',
        '[&_svg]:size-4 [&_svg]:text-muted-foreground',
        props.class,
      )"
      data-slot="select-trigger"
    >
      <slot />
    </Select.Trigger>
  </Select.Control>
</template>
