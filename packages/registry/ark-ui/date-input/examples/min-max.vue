<script setup lang="ts">
import { parseDate } from "@internationalized/date";
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root :min="parseDate('2024-01-01')" :max="parseDate('2024-12-31')">
    <DateInput.Label>Date (2024 only)</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
