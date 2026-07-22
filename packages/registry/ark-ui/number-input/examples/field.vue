<script setup lang="ts">
import { Field } from "@vuzeno/registry/ui/field";
import { NumberInput } from "@vuzeno/registry/ui/number-input";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-vue-next";
</script>

<template>
  <Field.Root class="items-center">
    <NumberInput.Root>
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
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
