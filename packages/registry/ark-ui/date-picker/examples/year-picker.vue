<script setup lang="ts">
import { type DateValue, parseDate } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";

const format = (date: DateValue) => date.year.toString();

const parse = (value: string | undefined) => {
  if (value === "" || !value) return;
  const year = Number(value);
  if (year < 100) {
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;
    return parseDate(new Date(currentCentury + year, 0));
  }
  return parseDate(new Date(Number(value), 0));
};
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <DatePicker.Root
      :format="format"
      :parse="parse"
      default-view="year"
      min-view="year"
      placeholder="yyyy"
   
    >
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger as-child>
          <Button size="icon" variant="outline">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.YearView />
      </DatePicker.Content>
    </DatePicker.Root>
  </Field.Root>
</template>
