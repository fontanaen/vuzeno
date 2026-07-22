<script setup lang="ts">
import { NumberInput } from "@vuzeno/registry/ui/number-input";
import { cn } from "cnfast";
import { MinusIcon, PlusIcon } from "lucide-vue-next";
import { type HTMLAttributes } from "vue";
import { injectFiltersContext } from "./context";
import type { NumberField as NumberFieldDef } from "./field";
import { filtersControlVariants } from "./variants";

const modelValue = defineModel<number | null>();

const props = defineProps<{
  field: NumberFieldDef;
  class?: HTMLAttributes["class"];
}>();

const { variant, size } = injectFiltersContext();

function updateModelValue(value?: string) {
  if (value === undefined || value === "") {
    modelValue.value = null;
    return;
  }

  const parsed = Number(value);

  modelValue.value = Number.isNaN(parsed) ? null : parsed;
}
</script>

<template>
  <NumberInput.Root
    :model-value="modelValue?.toString()"
    :min="field.min"
    :max="field.max"
    :step="field.step"
    :format-options="field.numberFormat"
    class="w-auto max-w-none z-50"
    @update:model-value="updateModelValue"
  >
    <NumberInput.Control
      layout="segmented"
      :class="
        cn(
          variant === 'secondary' &&
            'border-none data-[layout=segmented]:dark:bg-secondary',
          'data-[layout=segmented]:rounded-none data-[layout=segmented]:border-l-0 data-[layout=segmented]:py-0',
        )
      "
    >
      <NumberInput.DecrementTrigger>
        <MinusIcon />
      </NumberInput.DecrementTrigger>
      <NumberInput.Input
        :class="
          cn(
            'h-full w-32 rounded-none border-0 py-0',
            filtersControlVariants({ size }),
            variant === 'secondary' && 'bg-secondary',
            props.class,
          )
        "
      />
      <NumberInput.IncrementTrigger>
        <PlusIcon />
      </NumberInput.IncrementTrigger>
    </NumberInput.Control>
  </NumberInput.Root>
</template>
