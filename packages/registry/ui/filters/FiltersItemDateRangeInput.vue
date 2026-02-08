<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { Button } from "@vuetella/ui/components/button";
import { Popover, PopoverContent, PopoverTrigger } from "@vuetella/ui/components/popover";
import { RangeCalendar } from "@vuetella/ui/components/range-calendar";
import { CalendarIcon } from "lucide-vue-next";
import type { DateRange } from "reka-ui";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field } from "./field";
import { type FilterRangeValue, isFilterRangeValue } from "./filter";

const props = defineProps<{
  field: Field;
  variant: FilterVariant;
}>();

const value = defineModel<FilterRangeValue<CalendarDate>>();

function onDateRangeChange(dates?: DateRange) {
  if (dates && dates.start instanceof CalendarDate && dates.end instanceof CalendarDate) {
    value.value = {
      start: dates.start,
      end: dates.end,
    };
  }
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                :variant="variant"
                class="h-auto w-52 justify-between font-normal text-sm px-3"
                :class="{ 'text-muted-foreground': !value }"
            >
                <template v-if="value && isFilterRangeValue(value)">
                    {{ value.start?.toDate(getLocalTimeZone()).toLocaleDateString() }} - {{ value.end?.toDate(getLocalTimeZone()).toLocaleDateString() }}
                </template>
                <template v-else>
                    Select date range
                </template>
                <CalendarIcon class="size-3!" />
            </Button>
        </PopoverTrigger>

        <PopoverContent class="w-auto overflow-hidden p-0" align="start">
            <RangeCalendar
                :model-value="value ?? undefined"
                layout="month-and-year"
                :min-value="(field.min as CalendarDate | undefined)"
                :max-value="(field.max as CalendarDate | undefined)"
                @update:model-value="onDateRangeChange"
            />
        </PopoverContent>
    </Popover>
</template>