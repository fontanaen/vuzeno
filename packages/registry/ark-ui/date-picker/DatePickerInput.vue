<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Input
    :class="cn(
      'box-border h-9 min-w-0 flex-1 rounded-md border border-input dark:bg-input/30 px-3 py-1 text-sm leading-5 font-[inherit] text-foreground outline-none',
      'transition-[border-color,box-shadow] duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus:border-ring focus:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      'data-invalid:border-destructive data-invalid:focus:border-destructive data-invalid:focus:shadow-[0_0_0_1px_var(--destructive)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="date-picker-input"
  >
    <slot />
  </DatePicker.Input>
</template>
