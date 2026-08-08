<script setup lang="ts">
import { type DateValue, parseDate } from "@internationalized/date";
import { CalendarIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";
import { type Ref, ref } from "vue";

const value = ref([parseDate("2022-01-01")]) as Ref<DateValue[]>;
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <DatePicker.Root v-model="value">
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger as-child>
          <Button size="icon-sm" variant="outline">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger as-child>
          <Button size="icon" variant="outline">
            <XIcon />
          </Button>
        </DatePicker.ClearTrigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.Calendar />
      </DatePicker.Content>
    </DatePicker.Root>
  </Field.Root>
</template>
