<script setup lang="ts">
import { CalendarIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Trigger as-child>
        <Button size="icon" variant="outline">
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
</template>
