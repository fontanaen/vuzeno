<script setup lang="ts">
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root>
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
