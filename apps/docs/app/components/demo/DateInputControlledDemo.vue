<script setup lang="ts">
import { type DateValue, parseDate } from "@internationalized/date";
import { DateInput } from "@vuzeno/registry/ui/date-input";
import { type Ref, ref } from "vue";

const value = ref([parseDate("2022-01-01")]) as Ref<DateValue[]>;
</script>

<template>
  <DateInput.Root v-model="value">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
