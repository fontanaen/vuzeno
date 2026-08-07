<script setup lang="ts">
import { ArrowLeftRightIcon, MinusIcon, PlusIcon } from "@lucide/vue";
import { NumberInput } from "@vuzeno/registry/ui/number-input";
</script>

<template>
  <div class="flex flex-col gap-4">
    <NumberInput.Root default-value="10">
      <NumberInput.Label>Label</NumberInput.Label>
      <NumberInput.Control layout="segmented">
        <NumberInput.Scrubber>
          <ArrowLeftRightIcon />
        </NumberInput.Scrubber>
        <NumberInput.IncrementTrigger>
          <PlusIcon />
        </NumberInput.IncrementTrigger>
        <NumberInput.Input />
        <NumberInput.DecrementTrigger>
          <MinusIcon />
        </NumberInput.DecrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>

    <NumberInput.Root default-value="10">
      <NumberInput.Label>Label</NumberInput.Label>
      <NumberInput.Control layout="segmented">
        <NumberInput.IncrementTrigger>
          <PlusIcon />
        </NumberInput.IncrementTrigger>
        <NumberInput.Input />
        <NumberInput.DecrementTrigger>
          <MinusIcon />
        </NumberInput.DecrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  </div>
</template>
