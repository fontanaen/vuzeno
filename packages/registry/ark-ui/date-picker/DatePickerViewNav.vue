<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import DatePickerNextTrigger from "./DatePickerNextTrigger.vue";
import DatePickerPrevTrigger from "./DatePickerPrevTrigger.vue";
import DatePickerRangeText from "./DatePickerRangeText.vue";
import DatePickerViewControl from "./DatePickerViewControl.vue";
import DatePickerViewTrigger from "./DatePickerViewTrigger.vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePickerViewControl :class="cn(props.class)">
    <DatePickerPrevTrigger>
      <ChevronLeftIcon />
    </DatePickerPrevTrigger>
    <DatePickerViewTrigger>
      <DatePickerRangeText />
    </DatePickerViewTrigger>
    <DatePickerNextTrigger>
      <ChevronRightIcon />
    </DatePickerNextTrigger>
  </DatePickerViewControl>
</template>
