<script setup lang="ts">
import { NumberInput } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.IncrementTrigger
    :class="cn(
      'inline-flex cursor-pointer select-none items-center justify-center border-0 bg-transparent text-muted-foreground',
      '[&_svg]:size-4 [&_svg]:shrink-0',
      '[&:active:not(:disabled):not([data-disabled])]:scale-[0.97]',
      'transition-transform duration-160 ease-out',
      'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring',
      'disabled:cursor-not-allowed disabled:text-muted-foreground/40',
      'data-disabled:cursor-not-allowed data-disabled:text-muted-foreground/40',
      'in-data-[slot=number-input-trigger-group]:flex-1',
      'group-data-[layout=segmented]/control:h-full group-data-[layout=segmented]/control:w-(--stepper-width) group-data-[layout=segmented]/control:shrink-0 group-data-[layout=segmented]/control:border-border',
      props.class,
    )"
    data-slot="number-input-increment-trigger"
  >
    <slot />
  </NumberInput.IncrementTrigger>
</template>
