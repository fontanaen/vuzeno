<script setup lang="ts">
import { DateFormatter } from "@internationalized/date";
import { DateInput } from "@vuzeno/registry/ui/date-input";

const timeFormatter = new DateFormatter("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});
</script>

<template>
  <DateInput.Root granularity="minute" :hour-cycle="24" :formatter="timeFormatter">
    <DateInput.Label>Time</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
