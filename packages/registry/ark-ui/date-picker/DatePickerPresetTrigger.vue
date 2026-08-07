<script setup lang="ts">
import { DatePicker, type DatePickerPresetTriggerProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerPresetTriggerProps & { class?: HTMLAttributes["class"] }>();

const presetTriggerProps = reactiveOmit(props, "class");
</script>

<template>
  <DatePicker.PresetTrigger
    v-bind="presetTriggerProps"
    :class="cn(
      'inline-flex items-center justify-center rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium font-[inherit] whitespace-nowrap text-foreground outline-none',
      'transition-[background,border-color] duration-150 ease-out',
      '[&:hover:not(:disabled):not([data-disabled])]:bg-accent',
      'focus-visible:border-ring focus-visible:shadow-[0_0_0_1px_var(--demo-coral-solid)]',
      props.class,
    )"
    data-slot="date-picker-preset-trigger"
  >
    <slot />
  </DatePicker.PresetTrigger>
</template>
