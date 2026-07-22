<script setup lang="ts">
import { NumberInput } from "@vuzeno/registry/ui/number-input";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-vue-next";
</script>

<template>
  <NumberInput.Root :format-options="{ style: 'currency', currency: 'USD' }">
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
