<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { computed, watch } from "vue";
import { injectFiltersContext } from "./context";
import FiltersOptionRender from "./FiltersOptionRender.vue";
import type { BaseField } from "./field";
import type { FilterValue } from "./filter";
import { getOperatorDefaultValue, type Operator, OperatorInputType, type OperatorOption } from "./operator";
import { filtersCheckboxVariants, filtersMenuItemVariants } from "./variants";

type SelectCollectionItem = OperatorOption<unknown> & { id: string };

const props = defineProps<{
  field: BaseField;
}>();

const { filters, addFilter, updateFilter, removeFilter, size } = injectFiltersContext();

const defaultOperator = computed<Operator<unknown>>(() => {
  const operator = props.field.operators.find((candidate) => candidate.default) ?? props.field.operators[0];

  if (!operator) {
    throw new Error(`Filters: field "${props.field.key}" has no operators`);
  }

  return operator;
});

const existingFilter = computed(() => filters.value.find((filter) => filter.field === props.field.key));
const isMultiSelect = computed(() => defaultOperator.value.inputType === OperatorInputType.MULTI_SELECT);
const hasOptionsMenu = computed(() => {
  const { inputType, options } = defaultOperator.value;

  return options !== undefined && (inputType === OperatorInputType.SELECT || inputType === OperatorInputType.MULTI_SELECT);
});
const isSearchable = computed(() => defaultOperator.value.options?.searchable === true);
const disabled = computed(() => !isMultiSelect.value && existingFilter.value !== undefined);

const selectItems = computed<SelectCollectionItem[]>(() =>
  (defaultOperator.value.options?.items ?? []).map((option, index) => ({ ...option, id: String(index) })),
);

function getItemString(item: SelectCollectionItem) {
  const renderedOption = defaultOperator.value.options?.renderOption?.(item);
  const renderedLabel = typeof renderedOption === "string" ? renderedOption : "";

  return `${item.label} ${renderedLabel}`.trim();
}

const { collection, set, searchTerm } = useMenuFilterCollection<SelectCollectionItem>({
  get initialItems() {
    return selectItems.value;
  },
  itemToString: getItemString,
  itemToValue: (item) => item.id,
  filter: (itemString, filterText) => itemString.toLowerCase().includes(filterText.toLowerCase()),
});

watch(selectItems, (next) => {
  set(next);
});

const displayedItems = computed(() => (isSearchable.value ? collection.value.items : selectItems.value));

function addLeafFilter() {
  addFilter({
    field: props.field.key,
    operator: defaultOperator.value.value,
    value: getOperatorDefaultValue(defaultOperator.value) as FilterValue,
  });
}

function toggleOption(option: OperatorOption<unknown>) {
  const filter = existingFilter.value;

  if (!filter) {
    addFilter({
      field: props.field.key,
      operator: defaultOperator.value.value,
      value: [option.value] as FilterValue,
    });
    return;
  }

  const current = Array.isArray(filter.value) ? (filter.value as unknown[]) : [];
  const next = current.includes(option.value) ? current.filter((value) => value !== option.value) : [...current, option.value];

  if (next.length === 0) {
    removeFilter(filter);
    return;
  }

  updateFilter(filter, { value: next as FilterValue });
}

function isOptionChecked(option: OperatorOption<unknown>): boolean {
  const filter = existingFilter.value;

  if (!filter || !Array.isArray(filter.value)) {
    return false;
  }

  return (filter.value as unknown[]).includes(option.value);
}

function selectOption(option: OperatorOption<unknown>) {
  if (isMultiSelect.value) {
    toggleOption(option);
    return;
  }

  addFilter({
    field: props.field.key,
    operator: defaultOperator.value.value,
    value: option.value as FilterValue,
  });
}
</script>

<template>
  <Menu.Root
    v-if="hasOptionsMenu && defaultOperator.options"
    :typeahead="!isSearchable"
    :close-on-select="!isMultiSelect"
  >
    <Menu.TriggerItem :class="cn(filtersMenuItemVariants({ size }), 'gap-2 data-disabled:opacity-50')">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </Menu.TriggerItem>

    <Menu.Content class="border-b border-muted" :class="{ 'min-w-48 p-0': isSearchable }">
      <Menu.Filter v-if="isSearchable" v-model:search-term="searchTerm" class="px-0">
        <Menu.FilterInput
          :placeholder="defaultOperator.options.searchPlaceholder ?? 'Search option'"
          :class="cn('px-3 text-xs', filtersMenuItemVariants({ size }))"
        />
      </Menu.Filter>

      <Menu.Empty
        v-if="isSearchable && displayedItems.length === 0"
        :class="filtersMenuItemVariants({ size })"
      >
        {{ defaultOperator.options.emptyLabel ?? "No results found." }}
      </Menu.Empty>

      <div :class="{ 'p-1': isSearchable }">
        <Menu.Item
          v-for="option in displayedItems"
          :key="option.id"
          :value="option.id"
          :class="filtersMenuItemVariants({ size })"
          :disabled="disabled"
          @click="selectOption(option)"
        >
          <Checkbox.Root
            v-if="isMultiSelect"
            :checked="isOptionChecked(option)"
            @click.stop
            @checked-change="toggleOption(option)"
          >
            <Checkbox.Control :class="filtersCheckboxVariants({ size })">
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>

          <FiltersOptionRender :render="defaultOperator.options.renderOption?.(option)">
            {{ option.label }}
          </FiltersOptionRender>
        </Menu.Item>
      </div>
    </Menu.Content>
  </Menu.Root>

  <Menu.Item v-else :disabled="disabled" :value="field.key" :class="filtersMenuItemVariants({ size })" @click="addLeafFilter">
    <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
    {{ field.label }}
  </Menu.Item>
</template>
