<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import { type HTMLAttributes, toRefs } from "vue";
import { provideFiltersContext } from "./context";
import { type BaseField, type FilterFieldItem, isField, isFieldGroup, isFieldSubmenu } from "./field";
import type { Filter } from "./filter";
import type { FiltersSize, FiltersVariant } from "./variants";

const filters = defineModel<Filter[]>("filters", { default: () => [] });

const props = withDefaults(
  defineProps<{
    fields: FilterFieldItem[];
    variant?: FiltersVariant;
    size?: FiltersSize;
    class?: HTMLAttributes["class"];
  }>(),
  {
    variant: "outline",
    size: "md",
  },
);

const { fields, variant, size } = toRefs(props);

function findFieldIn(items: FilterFieldItem[], key: string): BaseField | undefined {
  for (const item of items) {
    if (isField(item)) {
      if (item.key === key) {
        return item;
      }
      continue;
    }

    if (isFieldGroup(item) || isFieldSubmenu(item)) {
      const found = findFieldIn(item.fields, key);

      if (found) {
        return found;
      }
    }
  }

  return undefined;
}

function findField(key: string): BaseField | undefined {
  return findFieldIn(fields.value, key);
}

function addFilter(filter: Filter) {
  filters.value = [...filters.value, filter];
}

function updateFilter(filter: Filter, patch: Partial<Filter>) {
  const index = filters.value.indexOf(filter);

  if (index === -1) {
    return;
  }

  filters.value = filters.value.map((current, currentIndex) => (currentIndex === index ? { ...current, ...patch } : current));
}

function removeFilter(filter: Filter) {
  const index = filters.value.indexOf(filter);

  if (index === -1) {
    return;
  }

  filters.value = filters.value.filter((_, currentIndex) => currentIndex !== index);
}

function clearFilters() {
  filters.value = [];
}

provideFiltersContext({
  fields,
  filters,
  variant,
  size,
  addFilter,
  updateFilter,
  removeFilter,
  clearFilters,
  findField,
});
</script>

<template>
  <ark.div data-slot="filters-provider" :class="cn('flex flex-wrap items-center gap-2', props.class)">
    <slot />
  </ark.div>
</template>
