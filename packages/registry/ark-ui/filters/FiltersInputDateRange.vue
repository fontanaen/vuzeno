<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { RangeCalendar } from "@vuzeno/ui/components/range-calendar";
import { cn } from "cnfast";
import { Button } from "../button";
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

const { variant, size } = injectFiltersContext();

function onDateRangeChange(dates?: DateRange) {
  if (dates && dates.start instanceof CalendarDate && dates.end instanceof CalendarDate) {
    value.value = { start: dates.start, end: dates.end };
  }
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="variant"
        :size="size"
        :class="
          cn(
            'w-52 justify-between font-normal px-3',
            filtersControlVariants({ size }),
            { 'text-muted-foreground': !value },
          )
        "
      >
        <template v-if="value && isFilterRangeValue(value)">
          {{ value.start.toDate(getLocalTimeZone()).toLocaleDateString() }} -
          {{ value.end.toDate(getLocalTimeZone()).toLocaleDateString() }}
        </template>
        <template v-else> Select date range </template>
        <CalendarIcon class="size-3!" />
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto overflow-hidden p-0" align="start">
      <RangeCalendar
        :model-value="value ?? undefined"
        layout="month-and-year"
        :min-value="field.min"
        :max-value="field.max"
        @update:model-value="onDateRangeChange"
      />
    </PopoverContent>
  </Popover>
</template>
