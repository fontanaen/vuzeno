<script setup lang="ts">
import { ArrowLeftRightIcon, ChevronDownIcon, ChevronUpIcon } from "@lucide/vue";
import { NumberInput } from "@vuzeno/registry/ui/number-input";
</script>

<template>
  <NumberInput.Root default-value="32">
    <NumberInput.Label>Label</NumberInput.Label>
    <NumberInput.Control layout="inset">
      <NumberInput.Scrubber>
        <ArrowLeftRightIcon />
      </NumberInput.Scrubber>
      <NumberInput.Input data-has-scrubber />
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
