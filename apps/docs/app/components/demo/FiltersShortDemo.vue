<script setup lang="ts">
import type { Filter } from "@vuzeno/registry/ui/filters";
import { Field, Filters, FiltersClear, FiltersItem, FiltersMenu, FiltersMenuContent, FiltersMenuTrigger, FiltersProvider, Operator } from "@vuzeno/registry/ui/filters";
import { DollarSignIcon, TagIcon, UserIcon } from "lucide-vue-next";
import { type Ref, ref } from "vue";

const fields = ref([
  Field.TextField({ key: "name", label: "Name", icon: UserIcon, operators: [Operator.Contain({ label: "contains" })] }),
  Field.TextField({
    key: "status",
    label: "Status",
    icon: TagIcon,
    operators: [
      Operator.In({
        label: "any of",
        options: {
          items: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
            { label: "Pending", value: "pending" },
          ],
        },
      }),
    ],
  }),
  Field.NumberField({
    key: "price",
    label: "Price",
    icon: DollarSignIcon,
    min: 0,
    max: 1000,
    step: 10,
    numberFormat: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
    operators: [Operator.Btw({ label: "between" })],
  }),
]);

const filters: Ref<Filter[]> = ref([
  { field: "name", operator: "contains", value: "Alice" },
  { field: "status", operator: "in", value: ["active", "pending"] },
  { field: "price", operator: "btw", value: [100, 500] },
]);
</script>

<template>
  <div class="min-w-96 w-full">
    <FiltersProvider v-model:filters="filters" :fields="fields" variant="secondary" size="sm">
      <FiltersMenu>
        <FiltersMenuTrigger />
        <FiltersMenuContent />
      </FiltersMenu>

      <Filters filter-style="short">
        <FiltersItem
          v-for="filter in filters"
          :key="`${filter.field}:${filter.operator}`"
          :filter="filter"
        />
      </Filters>

      <FiltersClear />
    </FiltersProvider>
  </div>
</template>
