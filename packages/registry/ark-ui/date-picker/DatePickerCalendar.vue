<script setup lang="ts">
import DatePickerDayView from "./DatePickerDayView.vue";
import DatePickerMonthView from "./DatePickerMonthView.vue";
import DatePickerYearView from "./DatePickerYearView.vue";

const props = withDefaults(
  defineProps<{
    columns?: number;
    format?: "short" | "long" | "narrow" | "numeric" | "2-digit";
  }>(),
  {
    columns: 4,
    format: "short",
  },
);
</script>

<template>
  <DatePickerDayView />
  <DatePickerMonthView :columns="props.columns" :format="props.format" />
  <DatePickerYearView :columns="props.columns" />
</template>
