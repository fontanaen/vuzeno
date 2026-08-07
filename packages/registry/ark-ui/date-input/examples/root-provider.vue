<script setup lang="ts">
import { DateInput, useDateInput } from "@vuzeno/registry/ui/date-input";

const dateInput = useDateInput();
</script>

<template>
  <DateInput.RootProvider :value="dateInput">
    <output class="text-sm text-muted-foreground">
      {{ dateInput.valueAsString.length > 0 ? dateInput.valueAsString : "N/A" }}
    </output>
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.RootProvider>
</template>
