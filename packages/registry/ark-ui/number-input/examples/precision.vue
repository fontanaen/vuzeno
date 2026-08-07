<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@lucide/vue";
import { NumberInput } from "@vuzeno/registry/ui/number-input";
</script>

<template>
  <NumberInput.Root
    :format-options="{ minimumFractionDigits: 2, maximumFractionDigits: 3 }"
    default-value="1.00"
  >
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Control layout="inset">
      <NumberInput.Input />
      <NumberInput.TriggerGroup>
        <NumberInput.IncrementTrigger>
          <ChevronUpIcon />
        </NumberInput.IncrementTrigger>
        <NumberInput.DecrementTrigger>
          <ChevronDownIcon />
        </NumberInput.DecrementTrigger>
      </NumberInput.TriggerGroup>
    </NumberInput.Control>
  </NumberInput.Root>
</template>
