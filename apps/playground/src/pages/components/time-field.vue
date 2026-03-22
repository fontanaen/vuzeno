<script setup lang="ts">
import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";
import { TimeField, TimeFieldInput, TimeFieldSeparator } from "@vuzeno/registry/ui/time-field";
import { Calendar } from "@vuzeno/ui/components/calendar";
import { Field, FieldGroup, FieldLabel } from "@vuzeno/ui/components/field";
import { Clock10Icon } from "lucide-vue-next";
import { ref } from "vue";

definePage({
  name: "components.time-field",
});

const date = ref(new CalendarDateTime(2026, 3, 16, 12, 30, 10));

function format(date: CalendarDateTime) {
  return date.toDate(getLocalTimeZone()).toLocaleString();
}
</script>

<template>
  <FieldGroup class="grid grid-cols-2 gap-0">
    <Field>
      <FieldLabel>Date</FieldLabel>
      <div class="border border-input rounded-lg p-1 dark:bg-input/30 w-fit!">
        <Calendar v-model="date" class="w-fit" />
      </div>
    </Field>

    <Field data-invalid="true">
      <FieldLabel>Time</FieldLabel>
      <TimeField v-model="date" granularity="second" :hour-cycle="12" v-slot="{ hour, minute, second, dayPeriod }" class="w-fit!">
        <Clock10Icon class="size-4" />
        <TimeFieldInput :segment="hour" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="minute" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="second" />
        <TimeFieldInput :segment="dayPeriod" />
      </TimeField>
    </Field>
  </FieldGroup>

  <p class="text-sm">
    {{ format(date) }}
  </p>
</template>