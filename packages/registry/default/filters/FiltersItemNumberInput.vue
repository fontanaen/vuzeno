<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@vuzeno/ui/components/number-field";
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field } from "./field";

const props = defineProps<{
  field: Field<number[], number>;
  variant: FilterVariant;
  class?: HTMLAttributes["class"];
}>();

const modelValue = defineModel<number | null>();
</script>

<template>
    <NumberField v-model="modelValue" :min="field.min" :max="field.max" :step="field.step" :format-options="props.field.numberFormat">
        <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput :class="cn('h-full rounded-none border-l-0 py-0', variant === 'secondary' && 'bg-secondary', props.class)" />
            <NumberFieldIncrement />
        </NumberFieldContent>
    </NumberField>
</template>