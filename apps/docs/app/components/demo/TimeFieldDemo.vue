<script setup lang="ts">
import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";
import { TimeField, TimeFieldInput, TimeFieldSeparator } from "@vuzeno/registry/ui/time-field";
import { Clock10Icon } from "lucide-vue-next";
import { ref } from "vue";

const date = ref(new CalendarDateTime(2026, 3, 16, 12, 30, 10));

function format(date: CalendarDateTime) {
  return date.toDate(getLocalTimeZone()).toLocaleString();
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TimeField v-model="date" granularity="second" :hour-cycle="12" v-slot="{ hour, minute, second, dayPeriod }" class="w-fit">
      <Clock10Icon class="size-4" />
      <TimeFieldInput :segment="hour" />
      <TimeFieldSeparator />
      <TimeFieldInput :segment="minute" />
      <TimeFieldSeparator />
      <TimeFieldInput :segment="second" />
      <TimeFieldInput :segment="dayPeriod" />
    </TimeField>
    <p class="text-sm text-muted-foreground">
      {{ format(date) }}
    </p>
  </div>
</template>
