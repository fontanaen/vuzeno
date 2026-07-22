<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { DateInput, useDateInput } from "@vuzeno/registry/ui/date-input";
import { XIcon } from "lucide-vue-next";

const dateInput = useDateInput();
</script>

<template>
  <DateInput.RootProvider :value="dateInput">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DateInput.SegmentGroup v-slot="segment">
        <DateInput.Segment :segment="segment" />
      </DateInput.SegmentGroup>
      
      <Button
        aria-label="Clear date"
        type="button"
        variant="outline"
        size="icon-sm"
        @click="dateInput.clearValue()"
      >
        <XIcon />
      </Button>
    </DateInput.Control>
  </DateInput.RootProvider>
</template>
