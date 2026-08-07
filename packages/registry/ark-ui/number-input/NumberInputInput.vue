<script setup lang="ts">
import { NumberInput, type NumberInputInputProps } from "@ark-ui/vue/number-input";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<NumberInputInputProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <NumberInput.Input
    :class="cn(
      'h-full min-w-0 text-sm font-medium tabular-nums text-foreground outline-none',
      'placeholder:text-muted-foreground',
      'group-data-[layout=inset]/control:w-full group-data-[layout=inset]/control:rounded-md group-data-[layout=inset]/control:bg-transparent',
      'group-data-[layout=inset]/control:pl-(--input-pl,0.75rem) group-data-[layout=inset]/control:pr-(--input-pr,0.75rem)',
      'group-data-[layout=inset]/control:data-has-scrubber:pl-[calc(var(--scrubber-width)+0.25rem)]',
      'group-data-[layout=inset]/control:text-start',
      'group-data-[layout=inset]/control:focus-visible:z-1 group-data-[layout=inset]/control:focus-visible:border-ring group-data-[layout=inset]/control:focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'group-data-[layout=inset]/control:data-invalid:border-destructive group-data-[layout=inset]/control:data-invalid:focus-visible:border-destructive group-data-[layout=inset]/control:data-invalid:focus-visible:shadow-[0_0_0_1px_var(--destructive)]',
      'group-data-[layout=segmented]/control:min-w-0 group-data-[layout=segmented]/control:flex-1 group-data-[layout=segmented]/control:border-0 group-data-[layout=segmented]/control:bg-transparent group-data-[layout=segmented]/control:px-3 group-data-[layout=segmented]/control:text-center',
      'group-data-[layout=segmented]/control:focus-visible:ring-0 group-data-[layout=segmented]/control:focus-visible:shadow-none',
      props.class,
    )"
    data-slot="number-input-input"
  >
    <slot />
  </NumberInput.Input>
</template>
