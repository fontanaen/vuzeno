<script setup lang="ts">
import { Checkbox } from "@vuzeno/ui/components/checkbox";
import { DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { cn } from "cnfast";
import { computed, isVNode, ref } from "vue";
import { injectFiltersContext } from "./context";
import type { BaseField } from "./field";
import type { FilterValue } from "./filter";
import { type Operator, OperatorDefaultValue, OperatorInputType, type OperatorOption } from "./operator";
import { DropdownItemSizeVariant } from "./sizes";

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
const isSelect = computed(() => defaultOperator.value.inputType === OperatorInputType.SELECT);
const disabled = computed(() => !isMultiSelect.value && existingFilter.value !== undefined);
const filteredOptions = computed(() => {
  const options = defaultOperator.value.options?.items ?? [];
  const search = searchValue.value.trim().toLocaleLowerCase();

  if (!search) {
    return options;
  }

  return options.filter((option) => getOptionSearchValue(option).includes(search));
});

function fallbackValue(operator: Operator<unknown>): FilterValue {
  return (operator.defaultValue ?? OperatorDefaultValue[operator.inputType]) as FilterValue;
}

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
    value: fallbackValue(defaultOperator.value),
  });
}

function addSelectFilter(value: unknown) {
  addFilter({
    field: props.field.key,
    operator: defaultOperator.value.value,
    value: value as FilterValue,
  });
}

function isOptionChecked(option: OperatorOption<unknown>): boolean {
  const filter = existingFilter.value;

  if (!filter || !Array.isArray(filter.value)) {
    return false;
  }

  return (filter.value as unknown[]).includes(option.value);
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
</script>

<template>
  <DropdownMenuSub v-if="isSelect && defaultOperator.options">
    <DropdownMenuSubTrigger :disabled="disabled" class="data-disabled:opacity-50" :class="cn(DropdownItemSizeVariant[size], 'gap-2')">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent class="border-b border-muted" :class="{ 'min-w-48 p-0': defaultOperator.options.searchable }">
        <div v-if="defaultOperator.options.searchable" class="border-b border-border px-2 py-1">
          <input
            v-model="searchValue"
            :placeholder="defaultOperator.options.searchPlaceholder ?? 'Search option'"
            class="h-8 w-full bg-transparent text-xs border-b border-primary/90 outline-none placeholder:text-muted-foreground"
            @click.stop
            @keydown="handleSearchKeydown"
            @pointerdown.stop
          >
        </div>

        <div :class="{ 'p-1': defaultOperator.options.searchable }">
          <div
            v-if="filteredOptions.length === 0"
            class="px-2 py-1.5 text-muted-foreground"
            :class="DropdownItemSizeVariant[size]"
          >
            {{ defaultOperator.options.emptyLabel ?? "No results found." }}
          </div>

          <DropdownMenuItem
            v-for="option in filteredOptions"
            :key="String(option.value)"
            :class="DropdownItemSizeVariant[size]"
            :disabled="disabled"
            @select="addSelectFilter(option.value)"
          >
            <template v-if="defaultOperator.options?.renderOption">
              <template v-if="isVNode(defaultOperator.options.renderOption(option))">
                <component :is="defaultOperator.options.renderOption(option)" />
              </template>
              <template v-else>
                {{ defaultOperator.options.renderOption(option) }}
              </template>
            </template>
            <template v-else>
              {{ option.label }}
            </template>
          </DropdownMenuItem>
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>

  <DropdownMenuSub v-else-if="isMultiSelect && defaultOperator.options">
    <DropdownMenuSubTrigger :class="cn(DropdownItemSizeVariant[size], 'gap-2')">
      <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
      {{ field.label }}
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent class="border-b border-muted" :class="{ 'min-w-48 p-0': defaultOperator.options.searchable }">
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
            :class="DropdownItemSizeVariant[size]"
          >
            {{ defaultOperator.options.emptyLabel ?? "No results found." }}
          </div>

          <DropdownMenuItem
            v-for="option in filteredOptions"
            :key="String(option.value)"
            :class="DropdownItemSizeVariant[size]"
            @select="toggleOption(option)"
          >
            <Checkbox
              :model-value="isOptionChecked(option)"
              @click.stop
              @update:model-value="toggleOption(option)"
            />
            <template v-if="defaultOperator.options?.renderOption">
              <template v-if="isVNode(defaultOperator.options.renderOption(option))">
                <component :is="defaultOperator.options.renderOption(option)" />
              </template>
              <template v-else>
                {{ defaultOperator.options.renderOption(option) }}
              </template>
            </template>
            <template v-else>
              {{ option.label }}
            </template>
          </DropdownMenuItem>
        </div>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>

  <DropdownMenuItem v-else :disabled="disabled" :class="DropdownItemSizeVariant[size]" @select="addLeafFilter">
    <component :is="field.icon" v-if="field.icon" class="size-4 text-muted-foreground" />
    {{ field.label }}
  </DropdownMenuItem>
</template>
