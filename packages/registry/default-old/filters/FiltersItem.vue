<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/ui/components/button";
import { ButtonGroup } from "@vuzeno/ui/components/button-group";
import { cn } from "cnfast";
import { computed } from "vue";
import { type FiltersSize, injectFiltersContext, injectFiltersStyleContext } from "./context";
import FiltersItemField from "./FiltersItemField.vue";
import FiltersItemOperator from "./FiltersItemOperator.vue";
import FiltersItemValue from "./FiltersItemValue.vue";
import type { Filter, FilterValue } from "./filter";
import { type Operator, OperatorDefaultValue } from "./operator";

const props = defineProps<{
  filter: Filter;
}>();

const { variant, size, removeFilter, updateFilter, findField } = injectFiltersContext();
const { style } = injectFiltersStyleContext();

const sizeVariant: Record<FiltersSize, string> = {
  sm: "h-7",
  md: "h-8",
  lg: "h-10",
} as const;

const removeButtonPadding: Record<FiltersSize, string> = {
  sm: "px-2",
  md: "px-3",
  lg: "px-4",
} as const;

const field = computed(() => {
  const found = findField(props.filter.field);

  if (!found) {
    throw new Error(`Filters: field with key "${props.filter.field}" not found`);
  }

  return found;
});

const operator = computed<Operator<unknown>>(() => {
  const found = field.value.operators.find((candidate) => candidate.value === props.filter.operator) ?? field.value.operators[0];

  if (!found) {
    throw new Error(`Filters: no operator found for field "${field.value.key}"`);
  }

  return found;
});

const filterValue = computed<FilterValue>({
  get: () => props.filter.value,
  set: (next) => {
    if (Array.isArray(next) && next.length === 0) {
      removeFilter(props.filter);
      return;
    }

    updateFilter(props.filter, { value: next });
  },
});

function onOperatorChange(nextOperatorValue: string | undefined) {
  if (!nextOperatorValue) {
    return;
  }

  const next = field.value.operators.find((candidate) => candidate.value === nextOperatorValue);

  if (!next) {
    return;
  }

  if (next.inputType === operator.value.inputType) {
    updateFilter(props.filter, { operator: nextOperatorValue });
    return;
  }

  const fallback = OperatorDefaultValue[next.inputType] as FilterValue;
  const nextValue = (next.defaultValue ?? fallback) as FilterValue;

  updateFilter(props.filter, { operator: nextOperatorValue, value: nextValue });
}

function onDelete() {
  removeFilter(props.filter);
}
</script>

<template>
  <ButtonGroup data-slot="filters-item" :class="cn(sizeVariant[size], 'w-fit has-[>[data-slot=button-group]]:gap-0')">
    <FiltersItemField v-if="style === 'long'" :field="field">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </FiltersItemField>

    <FiltersItemOperator
      v-if="style === 'long'"
      :model-value="filter.operator"
      :options="field.operators"
      @update:model-value="onOperatorChange"
    />

    <FiltersItemValue
      v-model="filterValue"
      :field="field"
      :operator="operator"
    />

    <Button
      class="h-auto w-auto aspect-square"
      :class="removeButtonPadding[size]"
      :variant="variant"
      aria-label="Remove filter"
      @click="onDelete"
    >
      <XIcon class="size-3!" />
    </Button>
  </ButtonGroup>
</template>
