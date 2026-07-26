<script setup lang="ts">
import { CalendarDate, type DateValue } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";

const parse = (value: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/;
  const fullMatch = value.match(fullRegex);
  if (fullMatch) {
    const [_, day, month, year] = fullMatch.map(Number);
    try {
      return new CalendarDate(year + 2000, month, day);
    } catch {
      return undefined;
    }
  }

  const partialRegex = /^(\d{1,2})\/(\d{1,2})$/;
  const partialMatch = value.match(partialRegex);
  if (partialMatch) {
    const [_, day, month] = partialMatch.map(Number);
    const currentYear = new Date().getFullYear();
    try {
      return new CalendarDate(currentYear, month, day);
    } catch {
      return undefined;
    }
  }

  const dayRegex = /^(\d{1,2})$/;
  const dayMatch = value.match(dayRegex);
  if (dayMatch) {
    const [_, day] = dayMatch.map(Number);
    const currentYear = new Date().getFullYear();
    return new CalendarDate(currentYear, 1, day);
  }

  return undefined;
};

const format = (date: DateValue) => {
  const day = date.day.toString().padStart(2, "0");
  const month = date.month.toString().padStart(2, "0");
  const year = (date.year % 100).toString().padStart(2, "0");
  return `${day}/${month}/${year}`;
};
</script>

<template>
  <DatePicker.Root :format="format" :parse="parse" placeholder="dd/mm/yy">
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
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
      <DatePicker.Calendar />
    </DatePicker.Content>
  </DatePicker.Root>
</template>
