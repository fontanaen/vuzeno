<script setup lang="ts">
import type { CheckboxCheckedChangeDetails } from "@ark-ui/vue/checkbox";
import { SearchIcon } from "@lucide/vue";
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, watch } from "vue";
import { Button } from "../button";
import { injectFiltersContext } from "./context";
import FiltersOptionRender from "./FiltersOptionRender.vue";
import type { BaseField } from "./field";
import { type Operator, type OperatorOption } from "./operator";
import { filtersCheckboxVariants, filtersControlVariants, filtersMenuItemVariants } from "./variants";

type SelectCollectionItem = OperatorOption<unknown> & { id: string };

const modelValue = defineModel<unknown[]>({ default: () => [] });

const props = defineProps<{
  field: BaseField;
  operator: Operator<unknown>;
  class?: HTMLAttributes["class"];
}>();

const { variant, size } = injectFiltersContext();

const items = computed(() => props.operator.options?.items ?? []);
const isSearchable = computed(() => props.operator.options?.searchable === true);

const selectItems = computed<SelectCollectionItem[]>(() => items.value.map((option, index) => ({ ...option, id: String(index) })));

const renderOption = computed(() => props.operator.options?.renderOption);
const renderValue = computed(() => props.operator.options?.renderValue);
const maxSelections = computed(() => props.operator.options?.maxSelections);

const visibleSelections = computed<OperatorOption<unknown>[]>(() => {
  if (!Array.isArray(modelValue.value)) {
    return [];
  }

  return (modelValue.value as unknown[])
    .slice(0, 2)
    .map((current) => items.value.find((option) => option.value === current))
    .filter((option): option is OperatorOption<unknown> => option !== undefined);
});

const renderedValue = computed(() => {
  if (!renderValue.value || !Array.isArray(modelValue.value) || modelValue.value.length === 0) {
    return undefined;
  }

  return renderValue.value(modelValue.value);
});

const triggerClass = computed(() =>
  cn(
    "w-auto gap-1 justify-between font-normal px-3 rounded-none border-l-0 py-0",
    filtersControlVariants({ size: size.value }),
    {
      "text-muted-foreground": !Array.isArray(modelValue.value) || modelValue.value.length === 0,
    },
    props.class,
  ),
);

function getItemString(item: SelectCollectionItem) {
  const rendered = renderOption.value?.(item);
  const renderedLabel = typeof rendered === "string" ? rendered : "";

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

function isChecked(option: OperatorOption<unknown>) {
  return Array.isArray(modelValue.value) && (modelValue.value as unknown[]).includes(option.value);
}

function toggleOption(option: OperatorOption<unknown>) {
  const current = Array.isArray(modelValue.value) ? [...(modelValue.value as unknown[])] : [];

  if (current.includes(option.value)) {
    modelValue.value = current.filter((value) => value !== option.value);
    return;
  }

  if (maxSelections.value !== undefined && current.length >= maxSelections.value) {
    return;
  }

  modelValue.value = [...current, option.value];
}

function handleCheckboxChange(option: OperatorOption<unknown>, _details: CheckboxCheckedChangeDetails) {
  toggleOption(option);
}
</script>

<template>
  <Menu.Root :typeahead="!isSearchable" :close-on-select="false" class="w-auto">
    <Menu.Trigger as-child>
      <Button :variant="variant" :size="size" :class="triggerClass">
        <FiltersOptionRender v-if="renderedValue !== undefined" :render="renderedValue" />

        <template v-else-if="Array.isArray(modelValue) && modelValue.length > 0">
          {{ visibleSelections.map((option) => option.label).join(", ") }}

          <span
            v-if="modelValue.length > visibleSelections.length"
            class="text-muted-foreground text-xs ml-1"
          >
            +{{ modelValue.length - visibleSelections.length }}
          </span>
        </template>
        <span v-else>Select options</span>
      </Button>
    </Menu.Trigger>

    <Menu.Content class="min-w-48" :class="{ 'p-0': isSearchable }">
      <Menu.Filter v-if="isSearchable" v-model:search-term="searchTerm" class="relative">
        <SearchIcon class="absolute top-1/2 left-3 -translate-y-1/2 size-4 text-muted-foreground" />
        <Menu.FilterInput
          :placeholder="operator.options?.searchPlaceholder ?? 'Search option'"
          :class="cn('pl-9', filtersMenuItemVariants({ size }))"
        />
      </Menu.Filter>

      <Menu.Empty
        v-if="isSearchable && displayedItems.length === 0"
        :class="cn('py-6 justify-center text-center', filtersMenuItemVariants({ size }))"
      >
        {{ operator.options?.emptyLabel ?? "No results found." }}
      </Menu.Empty>

      <div :class="isSearchable ? 'max-h-[min(var(--available-height,300px),300px)] overflow-y-auto p-1' : undefined">
        <Menu.Item
          v-for="option in displayedItems"
          :key="option.id"
          :value="option.id"
          :class="filtersMenuItemVariants({ size })"
          @click="toggleOption(option)"
        >
          <Checkbox.Root
            :checked="isChecked(option)"
            @click.stop
            @checked-change="handleCheckboxChange(option, $event)"
          >
            <Checkbox.Control :class="filtersCheckboxVariants({ size })">
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>

          <FiltersOptionRender :render="renderOption?.(option)">
            {{ option.label }}
          </FiltersOptionRender>
        </Menu.Item>
      </div>
    </Menu.Content>
  </Menu.Root>
</template>
