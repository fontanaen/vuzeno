<script setup lang="ts">
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root selection-mode="range">
    <DateInput.Label>Date Range</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup :index="0" v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
      <span>→</span>
      <DateInput.SegmentGroup :index="1" v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
    <DateInput.HiddenInput :index="0" />
    <DateInput.HiddenInput :index="1" />
  </DateInput.Root>
</template>
