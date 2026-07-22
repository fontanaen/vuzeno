<script setup lang="ts">
import { parseDate } from "@internationalized/date";
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { DateInput } from "@vuzeno/registry/ui/date-input";
import { ref } from "vue";

const shouldForceLeadingZeros = ref(true);
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox.Root v-model:checked="shouldForceLeadingZeros">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Force leading zeros</Checkbox.Label>
    </Checkbox.Root>

    <DateInput.Root
      :default-value="[parseDate('2024-06-05')]"
      :should-force-leading-zeros="shouldForceLeadingZeros"
    >
      <DateInput.Label>Date</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup v-slot="segment">
          <DateInput.Segment :segment="segment" />
        </DateInput.SegmentGroup>
      </DateInput.Control>
    </DateInput.Root>
  </div>
</template>
