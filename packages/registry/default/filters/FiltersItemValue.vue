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
import { type Operator, OperatorInputType } from "./operator";

const props = defineProps<{
  field: BaseField;
  operator: Operator<unknown>;
}>();

const modelValue = defineModel<FilterValue>();

const inputComponent = computed<Component | null>(() => {
  switch (props.operator.inputType) {
    case OperatorInputType.SELECT:
      return FiltersInputSelect;
    case OperatorInputType.MULTI_SELECT:
      return FiltersInputMultiSelect;
    case OperatorInputType.SWITCH:
      if (props.field instanceof BooleanField) {
        return FiltersInputSwitch;
      }
      return null;
    case OperatorInputType.RANGE:
      if (props.field instanceof NumberField) {
        return FiltersInputNumberRange;
      }
      if (props.field instanceof DateField) {
        return FiltersInputDateRange;
      }
      return null;
    case OperatorInputType.INPUT:
      if (props.field instanceof NumberField) {
        return FiltersInputNumber;
      }
      if (props.field instanceof DateField) {
        return FiltersInputDate;
      }
      if (props.field instanceof TextField) {
        return FiltersInputText;
      }
      if (props.field instanceof BooleanField) {
        return FiltersInputSwitch;
      }
      return null;
    default:
      return null;
  }
});
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
