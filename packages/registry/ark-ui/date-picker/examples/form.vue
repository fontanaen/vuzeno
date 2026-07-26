<script setup lang="ts">
import { isWeekend } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  const date = formData.get("date");
  alert(`Selected date: ${date}`);
};
</script>

<template>
  <form class="stack" @submit="handleSubmit">
    <DatePicker.Root name="date" :is-date-unavailable="isWeekend">
      <DatePicker.Label>Appointment date</DatePicker.Label>
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
    <button type="submit">Submit</button>
  </form>
</template>
