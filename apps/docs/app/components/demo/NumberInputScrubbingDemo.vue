<script setup lang="ts">
import { NumberInput } from "@vuzeno/registry/ui/number-input";
import { ArrowLeftRightIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-vue-next";
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
