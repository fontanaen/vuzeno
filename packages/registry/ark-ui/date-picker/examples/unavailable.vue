<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";

function isWeekend(date: DateValue) {
  const dayOfWeek = date.toDate("UTC").getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <DatePicker.Root :is-date-unavailable="isWeekend">
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger as-child>
          <Button size="icon" variant="outline">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>
  </Field.Root>
</template>
