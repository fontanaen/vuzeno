<script setup lang="ts">
import { type Component, computed } from "vue";
import FiltersInputDate from "./FiltersInputDate.vue";
import FiltersInputDateRange from "./FiltersInputDateRange.vue";
import FiltersInputMultiSelect from "./FiltersInputMultiSelect.vue";
import FiltersInputNumber from "./FiltersInputNumber.vue";
import FiltersInputNumberRange from "./FiltersInputNumberRange.vue";
import FiltersInputSelect from "./FiltersInputSelect.vue";
import FiltersInputSwitch from "./FiltersInputSwitch.vue";
import FiltersInputText from "./FiltersInputText.vue";
import { BaseField, BooleanField, DateField, NumberField, TextField } from "./field";
import type { FilterValue } from "./filter";
import { type Operator, OperatorInputType, type OperatorInputTypeValue } from "./operator";

const modelValue = defineModel<FilterValue>();

const props = defineProps<{
  field: BaseField;
  operator: Operator<unknown>;
}>();

type InputComponentResolver = (field: BaseField) => Component | null;

const inputComponentByInputType = {
  [OperatorInputType.SELECT]() {
    return FiltersInputSelect;
  },
  [OperatorInputType.MULTI_SELECT]() {
    return FiltersInputMultiSelect;
  },
  [OperatorInputType.SWITCH](field) {
    if (field instanceof BooleanField) {
      return FiltersInputSwitch;
    }

    return null;
  },
  [OperatorInputType.RANGE](field) {
    if (field instanceof NumberField) {
      return FiltersInputNumberRange;
    }

    if (field instanceof DateField) {
      return FiltersInputDateRange;
    }

    return null;
  },
  [OperatorInputType.INPUT](field) {
    if (field instanceof NumberField) {
      return FiltersInputNumber;
    }

    if (field instanceof DateField) {
      return FiltersInputDate;
    }

    if (field instanceof TextField) {
      return FiltersInputText;
    }

    if (field instanceof BooleanField) {
      return FiltersInputSwitch;
    }

    return null;
  },
  [OperatorInputType.NONE]() {
    return null;
  },
} satisfies Record<OperatorInputTypeValue, InputComponentResolver>;

const inputComponent = computed<Component | null>(() => inputComponentByInputType[props.operator.inputType](props.field));
</script>

<template>
  <component
    :is="inputComponent"
    v-if="inputComponent"
    v-model="modelValue"
    :field="field"
    :operator="operator"
  />
</template>
