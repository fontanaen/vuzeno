<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from "@lucide/vue";
import { NumberInput, useNumberInput } from "@vuzeno/registry/ui/number-input";

const numberInput = useNumberInput();
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      valueAsNumber: {{ numberInput.valueAsNumber }}
    </output>

    <NumberInput.RootProvider :value="numberInput">
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
    </NumberInput.RootProvider>
  </div>
</template>
