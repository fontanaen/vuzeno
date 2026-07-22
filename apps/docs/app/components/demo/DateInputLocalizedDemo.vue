<script setup lang="ts">
import { DateInput } from "@vuzeno/registry/ui/date-input";
</script>

<template>
  <DateInput.Root locale="fr-FR" granularity="minute" :hour-cycle="24">
    <DateInput.Label>Date et heure</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
    </DateInput.Control>
  </DateInput.Root>
</template>
