<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, watch } from "vue";
import { Button } from "../button";
import { injectFiltersContext } from "./context";
import FiltersOptionRender from "./FiltersOptionRender.vue";
import type { BaseField } from "./field";
import { type Operator, type OperatorOption } from "./operator";
import { filtersControlVariants, filtersMenuItemVariants } from "./variants";

type SelectCollectionItem = OperatorOption<unknown> & { id: string };

const modelValue = defineModel<unknown>();

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

const renderedValue = computed(() => {
  if (!renderValue.value || modelValue.value === undefined || modelValue.value === null) {
    return undefined;
  }

  return renderValue.value(modelValue.value);
});

const selectedOption = computed(() => items.value.find((option) => option.value === modelValue.value));

const triggerClass = computed(() =>
  cn(
    "w-auto justify-between font-normal px-3 rounded-none border-l-0 py-0",
    filtersControlVariants({ size: size.value }),
    {
      "text-muted-foreground": selectedOption.value === undefined && renderedValue.value === undefined,
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

function selectOption(option: OperatorOption<unknown>) {
  modelValue.value = option.value;
}

function isSelected(option: OperatorOption<unknown>) {
  return modelValue.value === option.value;
}
</script>

<template>
  <Menu.Root :typeahead="!isSearchable" class="w-auto">
    <Menu.Trigger as-child>
      <Button :variant="variant" :size="size" :class="triggerClass">
        <template v-if="renderedValue !== undefined">
          <FiltersOptionRender :render="renderedValue" />
        </template>
        <template v-else-if="selectedOption">
          <FiltersOptionRender :render="renderOption?.(selectedOption)">
            {{ selectedOption.label }}
          </FiltersOptionRender>
        </template>
        <span v-else>Select option</span>
      </Button>
    </Menu.Trigger>

    <Menu.Content :class="{ 'p-0 min-w-48': isSearchable }">
      <Menu.Filter v-if="isSearchable" v-model:search-term="searchTerm">
        <Menu.FilterInput
          :placeholder="operator.options?.searchPlaceholder ?? 'Search option'"
          :class="filtersMenuItemVariants({ size })"
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
          @click="selectOption(option)"
        >
          <FiltersOptionRender :render="renderOption?.(option)">
            {{ option.label }}
          </FiltersOptionRender>

          <CheckIcon
            class="ml-auto size-4 text-primary"
            :class="{ 'opacity-0': !isSelected(option) }"
          />
        </Menu.Item>
      </div>
    </Menu.Content>
  </Menu.Root>
</template>
