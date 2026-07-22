<script setup lang="ts">
import { DatePicker, type DatePickerWeekNumberCellProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerWeekNumberCellProps & { class?: HTMLAttributes["class"] }>();

const weekNumberCellProps = reactiveOmit(props, "class");
</script>

<template>
  <DatePicker.WeekNumberCell
    v-bind="weekNumberCellProps"
    :class="cn(
      'w-8 bg-muted p-0 text-center text-[0.6875rem] text-muted-foreground',
      props.class,
    )"
    data-slot="date-picker-week-number-cell"
  >
    <slot />
  </DatePicker.WeekNumberCell>
</template>
