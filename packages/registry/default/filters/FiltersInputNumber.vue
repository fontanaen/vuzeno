<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@vuzeno/ui/components/number-field";
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";
import { injectFiltersContext } from "./context";
import type { NumberField as NumberFieldDef } from "./field";
import { PopoverTriggerSizeVariant } from "./sizes";

const props = defineProps<{
  field: NumberFieldDef;
  class?: HTMLAttributes["class"];
}>();

const modelValue = defineModel<number | null>();

const { variant, size } = injectFiltersContext();
</script>

<template>
  <NumberField
    v-model="modelValue"
    :min="field.min"
    :max="field.max"
    :step="field.step"
    :format-options="field.numberFormat"
  >
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput :class="cn('h-full w-32 rounded-none border-l-0 py-0', PopoverTriggerSizeVariant[size], variant === 'secondary' && 'bg-secondary', props.class)" />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>
