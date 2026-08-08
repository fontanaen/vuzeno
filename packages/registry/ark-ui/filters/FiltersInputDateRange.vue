<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { cn } from "cnfast";
import { Button } from "../button";
import { DatePicker } from "../date-picker";
import { Popover } from "../popover";
import { injectFiltersContext } from "./context";
import type { DateField } from "./field";
import { type FilterRangeValue, isFilterRangeValue } from "./filter";
import { filtersControlVariants } from "./variants";

type DateRange = {
  start?: DateValue;
  end?: DateValue;
};

const value = defineModel<FilterRangeValue<CalendarDate> | null>();

defineProps<{
  field: DateField;
}>();

function onDateRangeChange(dates?: DateRange) {
  if (dates && dates.start instanceof CalendarDate && dates.end instanceof CalendarDate) {
    value.value = { start: dates.start, end: dates.end };
  }
}
</script>

<template>
  <DatePicker.Root 
    :model-value="[value?.start, value?.end]" 
    selection-mode="range" 
    :max-selected-dates="3" 
    inline
    @update:model-value="onDateRangeChange({ start: $event[0], end: $event[1] })"
  >
    <DatePicker.DayView />
  </DatePicker.Root>
</template>
