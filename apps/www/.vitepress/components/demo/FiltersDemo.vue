<script setup lang="ts">
import { CalendarDate, today } from "@internationalized/date";
import type { FieldGroup, Filter } from "@vuetella/registry/ui/filters";
import { FiltersClear, FiltersGroup, FiltersMenu, FiltersProvider } from "@vuetella/registry/ui/filters";
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
          { label: "is", value: "eq" },
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

const filtersJson = computed(() =>
  JSON.stringify(
    filters.value.map((filter) => {
      let stringValue: unknown = filter.value;
      if (filter.value instanceof CalendarDate || typeof filter.value === "string") {
        stringValue = filter.value.toString();
      } else if (filter.value && typeof filter.value === "object" && "start" in filter.value && "end" in filter.value) {
        stringValue = {
          start: (filter.value as { start: CalendarDate }).start?.toString(),
          end: (filter.value as { end: CalendarDate }).end?.toString(),
        };
      }
      return { field: filter.field, operator: filter.operator, value: stringValue };
    }),
    null,
    2,
  ),
);
</script>

<template>
  <div class="min-w-96 space-y-4">
    <FiltersProvider v-model:filters="filters" :fields="fields">
      <FiltersMenu />
      <FiltersGroup />
      <FiltersClear v-if="filters.length > 0" />
    </FiltersProvider>
    <pre class="bg-muted rounded-md p-4 text-xs">{{ filtersJson }}</pre>
  </div>
</template>
