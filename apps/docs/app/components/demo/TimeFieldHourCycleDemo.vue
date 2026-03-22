<script setup lang="ts">
import { CalendarDateTime } from "@internationalized/date";
import { TimeField, TimeFieldInput, TimeFieldSeparator } from "@vuzeno/registry/ui/time-field";
import { Clock10Icon } from "lucide-vue-next";
import { ref } from "vue";

const date = ref(new CalendarDateTime(2026, 3, 16, 16, 30, 0));
</script>

<template>
  <div class="flex flex-col gap-4">
    
    <TimeField v-model="date" granularity="minute" v-slot="{ hour, minute, dayPeriod }" class="w-fit">
      <Clock10Icon class="size-4" />
      
      <TimeFieldInput :segment="hour" />
      <TimeFieldSeparator />
      <TimeFieldInput :segment="minute" />
      <TimeFieldInput :segment="dayPeriod" />
    </TimeField>

    <TimeField v-model="date" granularity="minute" :hour-cycle="24" v-slot="{ hour, minute }" class="w-fit">
      <Clock10Icon class="size-4" />
      
      <TimeFieldInput :segment="hour" />
      <TimeFieldSeparator />
      <TimeFieldInput :segment="minute" />
    </TimeField>
  </div>
</template>
