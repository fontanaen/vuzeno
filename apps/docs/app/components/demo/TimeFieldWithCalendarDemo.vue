<script setup lang="ts">
import { CalendarDateTime, getLocalTimeZone } from "@internationalized/date";
import { TimeField, TimeFieldInput, TimeFieldSeparator } from "@vuzeno/registry/ui/time-field";
import { Button } from "@vuzeno/ui/components/button";
import { Calendar } from "@vuzeno/ui/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@vuzeno/ui/components/popover";
import { CalendarIcon, Clock10Icon } from "lucide-vue-next";
import { ref } from "vue";

const date = ref(new CalendarDateTime(2026, 3, 16, 12, 30, 10));

function format(date: CalendarDateTime) {
  return date.toDate(getLocalTimeZone()).toLocaleString();
}
</script>

<template>
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">
        <CalendarIcon class="size-4" />
        {{ format(date) }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="p-2 grid gap-4">
      <Calendar v-model="date" class="mx-auto p-0" />
      <TimeField v-model="date" granularity="second" :hour-cycle="12" v-slot="{ hour, minute, second, dayPeriod }" class="mx-auto dark:border-accent dark:bg-background/50">
        <Clock10Icon class="size-4" />
        <TimeFieldInput :segment="hour" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="minute" />
        <TimeFieldSeparator />
        <TimeFieldInput :segment="second" />
        <TimeFieldInput :segment="dayPeriod" />
      </TimeField>
    </PopoverContent>
  </Popover>
</template>
