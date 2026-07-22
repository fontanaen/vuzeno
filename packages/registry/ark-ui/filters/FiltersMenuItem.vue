<script setup lang="ts">
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { Menu } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { computed, ref } from "vue";
import { injectFiltersContext } from "./context";
import FiltersOptionRender from "./FiltersOptionRender.vue";
import type { BaseField } from "./field";
import type { FilterValue } from "./filter";
import { getOperatorDefaultValue, type Operator, OperatorInputType, type OperatorOption } from "./operator";
import { filtersCheckboxVariants, filtersMenuItemVariants } from "./variants";

const props = defineProps<{
  field: BaseField;
}>();

const { filters, addFilter, updateFilter, removeFilter, size } = injectFiltersContext();

const searchValue = ref("");

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
const disabled = computed(() => !isMultiSelect.value && existingFilter.value !== undefined);

const filteredOptions = computed(() => {
  const options = defaultOperator.value.options?.items ?? [];
  const search = searchValue.value.trim().toLocaleLowerCase();

  if (!search) {
    return options;
  }

  return options.filter((option) => getOptionSearchValue(option).includes(search));
});

function getOptionSearchValue(option: OperatorOption<unknown>): string {
  const renderedOption = defaultOperator.value.options?.renderOption?.(option);
  const renderedLabel = typeof renderedOption === "string" ? renderedOption : "";

  return `${option.label} ${renderedLabel}`.toLocaleLowerCase();
}

function handleSearchKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    return;
  }

  event.stopPropagation();
}

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
  <Menu.Root v-if="hasOptionsMenu && defaultOperator.options" :close-on-select="!isMultiSelect">
    <Menu.TriggerItem :class="cn(filtersMenuItemVariants({ size }), 'gap-2 data-disabled:opacity-50')">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </Menu.TriggerItem>

    <Menu.Content class="border-b border-muted" :class="{ 'min-w-48 p-0': defaultOperator.options.searchable }">
      <div v-if="defaultOperator.options.searchable" class="px-3 border-b border-muted">
        <input
          v-model="searchValue"
          :placeholder="defaultOperator.options.searchPlaceholder ?? 'Search option'"
          class="h-8 w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          @click.stop
          @keydown="handleSearchKeydown"
          @pointerdown.stop
        >
      </div>

      <div :class="{ 'p-1': defaultOperator.options.searchable }">
        <div
          v-if="filteredOptions.length === 0"
          class="px-2 py-1.5 text-muted-foreground"
          :class="filtersMenuItemVariants({ size })"
        >
          {{ defaultOperator.options.emptyLabel ?? "No results found." }}
        </div>

        <Menu.Item
          v-for="option in filteredOptions"
          :key="String(option.value)"
          :value="String(option.value)"
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