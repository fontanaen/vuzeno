<script setup lang="ts">
import { CalendarDate, type DateValue } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";

const format = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${month}/${year}`;
};

const parse = (value: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/;
  const fullMatch = value.match(fullRegex);
  if (fullMatch) {
    const [_, month, year] = fullMatch.map(Number);
    return new CalendarDate(year, month, 1);
  }
};
</script>

<template>
  <DatePicker.Root
    :format="format"
    :parse="parse"
    selection-mode="range"
    default-view="month"
    min-view="month"
    placeholder="mm/yyyy"
   
  >
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input :index="0" />
      <DatePicker.Input :index="1" />
      <DatePicker.Trigger as-child>
        <Button size="icon-sm" variant="outline">
          <CalendarIcon />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.ClearTrigger>
        Clear
      </DatePicker.ClearTrigger>
    </DatePicker.Control>
    <DatePicker.Content>
      <DatePicker.MonthView />
      <DatePicker.YearView />
    </DatePicker.Content>
  </DatePicker.Root>
</template>
