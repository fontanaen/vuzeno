<script setup lang="ts">
import { CalendarDate, today } from "@internationalized/date";
import type { FieldGroup, Filter } from "@vuzeno/registry/ui/filters";
import { FiltersClear, FiltersGroup, FiltersItem, FiltersMenu, FiltersProvider } from "@vuzeno/registry/ui/filters";
import { CalendarIcon, DollarSignIcon, TagIcon, ToggleRightIcon, UserIcon } from "lucide-vue-next";
import { computed, h, type Ref, ref } from "vue";

const fields = ref<FieldGroup[]>([
  {
    group: "Base",
    fields: [
      {
        key: "status",
        name: "Status",
        type: "text",
        icon: TagIcon,
        options: {
          searchable: true,
          items: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
            { label: "Pending", value: "pending" },
            { label: "Cancelled", value: "cancelled" },
          ],
          optionDisplay: (option) => {
            const color = {
              active: "bg-green-500",
              inactive: "bg-red-500",
              pending: "bg-yellow-500",
              cancelled: "bg-gray-500",
            } as const;
            return h("div", { class: "flex items-center gap-2" }, [h("span", { class: `size-2 rounded-full ${color[option.value as keyof typeof color]}` }), h("span", option.label)]);
          },
        },
        operators: [
          { label: "is", value: "eq", inputType: "select" },
          { label: "is not", value: "neq", inputType: "select" },
          { label: "includes", value: "in", inputType: "multi-select", default: true },
        ],
      },
      {
        key: "name",
        name: "Name",
        type: "text",
        icon: UserIcon,
        operators: [
          { label: "is", value: "eq" },
          { label: "contains", value: "contains" },
          { label: "starts with", value: "starts_with" },
        ],
      },
    ],
  },
  {
    group: "Dates & Numbers",
    fields: [
      {
        key: "created_at",
        name: "Created At",
        type: "date",
        icon: CalendarIcon,
        min: today(),
        max: today().add({ days: 10 }),
        multiple: false,
        operators: [
          { label: "is", value: "eq" },
          { label: "between", value: "btw", inputType: "date-range" },
        ],
      },
      {
        key: "price",
        name: "Price",
        type: "number",
        icon: DollarSignIcon,
        min: 0,
        max: 1000,
        step: 10,
        numberFormat: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
        operators: [
          { label: "less than", value: "lt", inputType: "number", default: true, defaultValue: 500 },
          { label: "between", value: "btw", inputType: "number-range" },
        ],
      },
      {
        key: "is_active",
        name: "Is Active",
        icon: ToggleRightIcon,
        type: "boolean",
        operators: [
          { label: "is", value: "eq", defaultValue: true },
          { label: "is not", value: "neq" },
        ],
      },
    ],
  },
]);

const filters: Ref<Filter[]> = ref([
  { field: "status", operator: "eq", value: "active" },
  { field: "price", operator: "btw", value: [100, 500] },
]);
</script>

<template>
  <div class="min-w-96 space-y-4 flex">
    <FiltersProvider v-model:filters="filters" :fields="fields" variant="outline" class="flex-nowrap items-start">
      <div class="flex items-start gap-2">
        <FiltersMenu />

        <FiltersGroup v-slot="{ removeFilter }">
          <template v-for="(filter, index) in filters" :key="filter.field">
            <FiltersItem
              v-if="!filter.hidden"
              :filter="filter"
              @delete="removeFilter(index)"
            />
          </template>
        </FiltersGroup>
      </div>
      
      <FiltersClear v-if="filters.length > 0" class="flex-none" />
    </FiltersProvider>
  </div>
</template>
