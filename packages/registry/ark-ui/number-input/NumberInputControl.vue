<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { inputVariants } from "../input";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    layout?: "inset" | "segmented";
  }>(),
  {
    layout: "inset",
  },
);
</script>

<template>
  <NumberInput.Control
    :data-layout="props.layout"
    :class="cn(
      'group/control relative isolate min-w-0',
      'data-[layout=segmented]:px-1 data-[layout=segmented]:flex data-[layout=segmented]:w-full data-[layout=segmented]:items-stretch data-[layout=segmented]:overflow-hidden data-[layout=segmented]:rounded-md data-[layout=segmented]:border data-[layout=segmented]:border-input data-[layout=segmented]:dark:bg-input/30',
      'data-[layout=inset]:[--input-pl:0.75rem] data-[layout=inset]:[--input-pr:0.75rem]',
      'data-[layout=inset]:has([data-slot=number-input-scrubber]):[--input-pl:calc(var(--scrubber-width)+0.25rem)]',
      'data-[layout=inset]:has([data-slot=number-input-trigger-group]):[--input-pr:calc(var(--stepper-width)+0.5rem)]',
      inputVariants({ size: 'sm' }),

      'transition-[color,box-shadow]',
      'data-[layout=segmented]:focus-within:border-ring data-[layout=segmented]:focus-within:ring-ring/50 data-[layout=segmented]:focus-within:ring-[3px]',
      'has-[[data-slot=number-input-input][data-invalid]]:focus-within:border-destructive has-[[data-slot=number-input-input][data-invalid]]:focus-within:ring-destructive/50 has-[[data-slot=number-input-input][data-invalid]]:focus-within:ring-[3px]',
      props.class,
    )"
    data-slot="number-input-control"
  >
    <slot />
  </NumberInput.Control>
</template>
