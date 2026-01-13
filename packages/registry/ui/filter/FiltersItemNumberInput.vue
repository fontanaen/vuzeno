<script setup lang="ts">
import type { Field } from './field';
import { NumberField, NumberFieldContent, NumberFieldInput, NumberFieldDecrement, NumberFieldIncrement } from '@vuetella/ui/components/number-field';
import type { FilterVariant } from './FiltersProvider.vue';

const props = defineProps<{
    field: Field<number[], number>;
    variant: FilterVariant;
}>()

const modelValue = defineModel<number | null>();
</script>

<template>
    <NumberField v-model="modelValue" :min="field.min" :max="field.max" :step="field.step" :format-options="props.field.numberFormat">
        <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput class="h-full rounded-none border-l-0 py-0" :class="{ 'bg-secondary': variant === 'secondary' }" />
            <NumberFieldIncrement />
        </NumberFieldContent>
    </NumberField>
</template>