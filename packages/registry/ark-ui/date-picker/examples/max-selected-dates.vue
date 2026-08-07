<script setup lang="ts">
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root selection-mode="multiple" :max-selected-dates="3" inline>
    <DatePicker.DayView />
  </DatePicker.Root>
</template>
