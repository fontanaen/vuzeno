<script setup lang="ts">
import type { DatePickerValueChangeDetails } from "@ark-ui/vue";
import { CalendarDateTime, DateFormatter, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { computed, ref } from "vue";

const formatter = new DateFormatter("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const value = ref<CalendarDateTime[]>([new CalendarDateTime(2025, 1, 29, 14, 30)]);

const timeValue = computed(() => {
  const v = value.value[0];
  return v ? `${String(v.hour).padStart(2, "0")}:${String(v.minute).padStart(2, "0")}` : "";
});

const formattedValue = computed(() => {
  const v = value.value[0];
  return v ? formatter.format(v.toDate(getLocalTimeZone())) : "Select date and time";
});

const onTimeChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const [hours, minutes] = target.value.split(":").map(Number);
  const current = value.value[0] ?? new CalendarDateTime(2025, 1, 1, 0, 0);
  value.value = [current.set({ hour: hours, minute: minutes })];
};

const onDateChange = (details: DatePickerValueChangeDetails) => {
  const newDate = details.value[0];
  if (!newDate) {
    value.value = [];
    return;
  }
  const prevTime = value.value[0] ?? { hour: 0, minute: 0 };
  value.value = [new CalendarDateTime(newDate.year, newDate.month, newDate.day, prevTime.hour, prevTime.minute)];
};
</script>

<template>
  <DatePicker.Root :value="value" :close-on-select="false" @value-change="onDateChange">
    <DatePicker.Label>Date and time</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Trigger as-child>
        <Button variant="outline" size="icon-sm" class="w-full justify-between">
          {{ formattedValue }}
          <CalendarIcon />
        </Button>
      </DatePicker.Trigger>
    </DatePicker.Control>
    <DatePicker.Content>
      <DatePicker.DayView>
        <input type="time" :value="timeValue" @input="onTimeChange" />
      </DatePicker.DayView>
    </DatePicker.Content>
  </DatePicker.Root>
</template>
