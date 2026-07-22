<script setup lang="ts">
import { cn } from "cnfast";
import { XIcon } from "lucide-vue-next";
import { computed } from "vue";
import { Button } from "../button";
import { ButtonGroup } from "../button-group";
import { injectFiltersContext, injectFiltersStyleContext } from "./context";
import FiltersItemField from "./FiltersItemField.vue";
import FiltersItemOperator from "./FiltersItemOperator.vue";
import FiltersItemValue from "./FiltersItemValue.vue";
import type { Filter, FilterValue } from "./filter";
import { type Operator, OperatorDefaultValue } from "./operator";
import type { FiltersSize } from "./variants";

const props = defineProps<{
  filter: Filter;
}>();

const { variant, size, removeFilter, updateFilter, findField } = injectFiltersContext();
const { style } = injectFiltersStyleContext();

const isLongStyle = computed(() => style.value === "long");

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
  <ButtonGroup 
    data-slot="filters-item" 
    :class="cn(
      'w-fit has-[>[data-slot=button-group]]:gap-0', 
      !isLongStyle && '*:[input]:rounded-l-md *:data-[slot=menu-trigger]:border-l *:data-[slot=menu-trigger]:rounded-l-md'
    )"
  >
    <FiltersItemField v-if="isLongStyle" :field="field">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </FiltersItemField>

    <FiltersItemOperator
      v-if="isLongStyle"
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
      class="aspect-square"
      :class="removeButtonPadding[size]"
      :variant="variant"
      :size="size"
      aria-label="Remove filter"
      @click="onDelete"
    >
      <XIcon class="size-3!" />
    </Button>
  </ButtonGroup>
</template>
