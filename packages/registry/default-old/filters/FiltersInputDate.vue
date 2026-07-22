<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { Button } from "@vuzeno/ui/components/button";
import { Calendar } from "@vuzeno/ui/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { cn } from "cnfast";
import { CalendarIcon } from "lucide-vue-next";
import { injectFiltersContext } from "./context";
import type { DateField } from "./field";
import { PopoverTriggerSizeVariant } from "./sizes";

defineProps<{
  field: DateField;
}>();

const value = defineModel<CalendarDate | null>();

const { variant, size } = injectFiltersContext();

function onDateChange(date?: DateValue) {
  if (date instanceof CalendarDate) {
    value.value = date;
  }
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="variant"
        :class="cn('h-auto w-36 justify-between font-normal px-3', PopoverTriggerSizeVariant[size], { 'text-muted-foreground': !value })"
      >
        {{ value instanceof CalendarDate ? value.toDate(getLocalTimeZone()).toLocaleDateString() : "Select date" }}
        <CalendarIcon class="size-3!" />
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto overflow-hidden p-0" align="start">
      <Calendar
        :model-value="value ?? undefined"
        layout="month-and-year"
        :min-value="field.min"
        :max-value="field.max"
        @update:model-value="onDateChange"
      />
    </PopoverContent>
  </Popover>
</template>
