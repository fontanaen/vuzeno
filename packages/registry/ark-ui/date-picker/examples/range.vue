<script setup lang="ts">
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root selectionMode="range">
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
    <DatePicker.PresetTrigger value="last7Days">Last 7 days</DatePicker.PresetTrigger>
    <DatePicker.Content>
      <DatePicker.Calendar />
    </DatePicker.Content>
  </DatePicker.Root>
</template>
