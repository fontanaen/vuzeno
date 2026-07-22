<script setup lang="ts">
import type { AutocompleteInputValueChangeDetails, AutocompleteOpenChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Menu } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { CheckIcon } from "lucide-vue-next";
import { computed, type HTMLAttributes, watch } from "vue";
import { Button, buttonVariants } from "../button";
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

const { collection, filter, set } = useListCollection<SelectCollectionItem>({
  get initialItems() {
    return selectItems.value;
  },
  itemToString: getItemString,
  itemToValue: (item) => item.id,
  filter: (itemString, filterText) => itemString.toLowerCase().includes(filterText.toLowerCase()),
});

const autocompleteValue = computed({
  get() {
    const index = items.value.findIndex((option) => option.value === modelValue.value);

    return index >= 0 ? [String(index)] : [];
  },
  set(values) {
    const option = items.value[Number(values[0])];

    if (option) {
      modelValue.value = option.value;
    }
  },
});

function selectOption(option: OperatorOption<unknown>) {
  modelValue.value = option.value;
}

function isSelected(option: OperatorOption<unknown>) {
  return modelValue.value === option.value;
}

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}

function handleOpenChange({ open }: AutocompleteOpenChangeDetails) {
  if (open) {
    filter("");
  }
}

watch(selectItems, (next) => {
  set(next);
});
</script>

<template>
  <Autocomplete.Root
    v-if="isSearchable"
    v-model="autocompleteValue"
    :collection="collection"
    class="h-full w-auto max-w-none"
    @input-value-change="handleInputChange"
    @open-change="handleOpenChange"
  >
    <Autocomplete.Control class="h-full w-auto gap-0">
      <Autocomplete.Trigger :class="cn(buttonVariants({ variant, size }), triggerClass)">
        <template v-if="renderedValue !== undefined">
          <FiltersOptionRender :render="renderedValue" />
        </template>
        <template v-else-if="selectedOption">
          <template v-if="renderOption">
            <FiltersOptionRender :render="renderOption(selectedOption)" />
          </template>
          <template v-else>
            {{ selectedOption.label }}
          </template>
        </template>
        <span v-else>Select option</span>
      </Autocomplete.Trigger>
    </Autocomplete.Control>
    
    <Autocomplete.Content class="w-min min-w-48 overflow-hidden p-0">
      <div class="border-b border-input shrink-0">
        <Autocomplete.Input
          :placeholder="operator.options?.searchPlaceholder ?? 'Search option'"
          :class="
            cn(
              'h-8 border-0 shadow-none dark:bg-transparent',
              filtersMenuItemVariants({ size }),
            )
          "
        />
      </div>

      <Autocomplete.Empty
        :class="cn('py-6 justify-center', filtersMenuItemVariants({ size }))"
      >
        {{ operator.options?.emptyLabel ?? "No results found." }}
      </Autocomplete.Empty>

      <div
        class="max-h-[min(var(--available-height,300px),300px)] overflow-y-auto p-1"
      >
        <Autocomplete.Item
          v-for="item in collection.items"
          :key="item.id"
          :item="item"
          :class="filtersMenuItemVariants({ size })"
        >
          <FiltersOptionRender :render="renderOption?.(item)">
            <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
          </FiltersOptionRender>

          <Autocomplete.ItemIndicator />
        </Autocomplete.Item>
      </div>
    </Autocomplete.Content>
  </Autocomplete.Root>

  <Menu.Root v-else class="w-auto">
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

    <Menu.Content>
      <Menu.Item
        v-for="option in items"
        :key="String(option.value)"
        :value="String(option.value)"
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
    </Menu.Content>
  </Menu.Root>
</template>
