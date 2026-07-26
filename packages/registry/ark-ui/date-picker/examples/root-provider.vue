<script setup lang="ts">
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker, useDatePicker } from "@vuzeno/registry/ui/date-picker";

const datePicker = useDatePicker();
</script>

<template>
  <div class="flex flex-col gap-2">
    <Button variant="outline" @click="datePicker.clearValue()">Clear</Button>

  <DatePicker.RootProvider :value="datePicker">
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
  </DatePicker.RootProvider>
  </div>
</template>
