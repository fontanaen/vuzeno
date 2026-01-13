<script setup lang="ts">
import { Input } from "@vuetella/ui/components/input";
import { h, computed } from "vue";
import type { Field } from "./field";
import { OperatorInputType, type Operator } from "./operator";
import type { FilterValue } from "./filter";
import FiltersItemSelect from "./FiltersItemSelect.vue";
import FiltersItemMultiSelect from "./FiltersItemMultiSelect.vue";
import FiltersItemDateInput from "./FiltersItemDateInput.vue";
import FiltersItemDateRangeInput from "./FiltersItemDateRangeInput.vue";
import FiltersItemNumberRangeInput from "./FiltersItemNumberRangeInput.vue";
import FiltersItemNumberInput from "./FiltersItemNumberInput.vue";
import FiltersItemSwitch from "./FiltersItemSwitch.vue";
import { injectFilterContext } from "./FiltersProvider.vue";

const props = defineProps<{
  field: Field;
  operator: Operator<any>;
}>();

const value = defineModel<FilterValue>();

const { variant } = injectFilterContext();

const defaultInputType = computed(() => {
  const mapping = {
    text: "text",
    date: "date",
    boolean: "boolean",
  } as const;

  return mapping[props.field.type as keyof typeof mapping];
});

const inputType = computed(() => {
  return props.operator.inputType ?? defaultInputType.value;
});

const inputComponent = computed(() => {
  const mapping = {
    [OperatorInputType.SELECT]: FiltersItemSelect,
    [OperatorInputType.MULTI_SELECT]: FiltersItemMultiSelect,
    [OperatorInputType.DATE]: FiltersItemDateInput,
    [OperatorInputType.DATE_RANGE]: FiltersItemDateRangeInput,
    [OperatorInputType.NUMBER_RANGE]: FiltersItemNumberRangeInput,
    [OperatorInputType.NUMBER]: FiltersItemNumberInput,
    [OperatorInputType.BOOLEAN]: FiltersItemSwitch,
    [OperatorInputType.TEXT]: h(Input, { class: ["h-auto", variant.value === "secondary" && "bg-secondary border-none"] }),
    [OperatorInputType.NONE]: null,
  } as const;

  return mapping[inputType.value as keyof typeof mapping];
});
</script>

<template>
    <component :is="inputComponent" v-model="value" :field="field" :variant="variant" />
</template>