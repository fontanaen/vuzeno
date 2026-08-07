<script setup lang="ts">
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root granularity="second">
    <DateInput.Label>Date &amp; Time</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
