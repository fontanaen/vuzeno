<script setup lang="ts">
import type { CheckboxCheckedChangeDetails } from "@ark-ui/vue/checkbox";
import type { AutocompleteInputValueChangeDetails, AutocompleteOpenChangeDetails } from "@vuzeno/registry/ui/autocomplete";
import { Autocomplete, useListCollection } from "@vuzeno/registry/ui/autocomplete";
import { Checkbox } from "@vuzeno/registry/ui/checkbox";
import { Menu } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import { SearchIcon } from "lucide-vue-next";
import { computed, type HTMLAttributes, isVNode, watch } from "vue";
import { Button, buttonVariants } from "../button";
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

const { collection, filter, set } = useListCollection<SelectCollectionItem>({
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

const autocompleteValue = computed({
  get() {
    if (!Array.isArray(modelValue.value)) {
      return [];
    }

    return (modelValue.value as unknown[])
      .map((current) => {
        const index = items.value.findIndex((option) => option.value === current);

        return index >= 0 ? String(index) : null;
      })
      .filter((id): id is string => id !== null);
  },
  set(values) {
    const next = values.map((id) => items.value[Number(id)]?.value).filter((value) => value !== undefined);

    if (maxSelections.value !== undefined && next.length > maxSelections.value) {
      return;
    }

    modelValue.value = next;
  },
});

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

function handleInputChange(details: AutocompleteInputValueChangeDetails) {
  filter(details.inputValue);
}

function handleOpenChange({ open }: AutocompleteOpenChangeDetails) {
  if (open) {
    filter("");
  }
}
</script>

<template>
  <Autocomplete.Root
    v-if="isSearchable"
    v-model="autocompleteValue"
    :collection="collection"
    multiple
    class="h-full w-auto max-w-none"
    @input-value-change="handleInputChange"
    @open-change="handleOpenChange"
  >
    <Autocomplete.Control class="h-full w-auto gap-0">
      <Autocomplete.Trigger :class="cn(buttonVariants({ variant, size }), triggerClass)">
        <template v-if="renderedValue !== undefined">
          <FiltersOptionRender :render="renderedValue" />
        </template>
        <template
          v-else-if="Array.isArray(modelValue) && modelValue.length > 0"
        >
          {{ visibleSelections.map((option) => option.label).join(", ") }}

          <span
            v-if="modelValue.length > visibleSelections.length"
            class="text-muted-foreground text-xs ml-1"
          >
            +{{ modelValue.length - visibleSelections.length }}
          </span>
        </template>
        <span v-else>Select options</span>
      </Autocomplete.Trigger>
    </Autocomplete.Control>
    
    <Autocomplete.Content class="w-min min-w-48 overflow-hidden p-0">
      <div class="relative border-b border-input shrink-0">
        <SearchIcon
          class="absolute top-1/2 left-3 -translate-y-1/2 size-4 text-muted-foreground"
        />
        <Autocomplete.Input
          :placeholder="operator.options?.searchPlaceholder ?? 'Search option'"
          :class="
            cn(
              'h-8 border-0 shadow-none dark:bg-transparent pl-9',
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
          <Checkbox.Root
            :checked="isChecked(item)"
            @click.stop
            @checked-change="handleCheckboxChange(item, $event)"
          >
            <Checkbox.Control :class="filtersCheckboxVariants({ size })">
              <Checkbox.Indicator />
            </Checkbox.Control>
          </Checkbox.Root>

          <template v-if="renderOption">
            <component
              :is="renderOption(item)"
              v-if="isVNode(renderOption(item))"
            />
            <template v-else>
              {{ renderOption(item) }}
            </template>
          </template>
          <template v-else>
            <Autocomplete.ItemText>{{ item.label }}</Autocomplete.ItemText>
          </template>
        </Autocomplete.Item>
      </div>
    </Autocomplete.Content>
  </Autocomplete.Root>

  <Menu.Root v-else :close-on-select="false" class="w-auto">
    <Menu.Trigger as-child>
      <Button :variant="variant" :size="size" :class="triggerClass">
        <FiltersOptionRender v-if="renderedValue !== undefined" :render="renderedValue" />
        
        <template
          v-else-if="Array.isArray(modelValue) && modelValue.length > 0"
        >
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

    <Menu.Content class="min-w-48">
      <Menu.Item
        v-for="option in items"
        :key="String(option.value)"
        :value="String(option.value)"
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
    </Menu.Content>
  </Menu.Root>
</template>
