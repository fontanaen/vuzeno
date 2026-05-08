<script setup lang="ts">
import { today } from "@internationalized/date";
import type { Filter, FiltersSize, FiltersVariant } from "@vuzeno/registry/ui/filters";
import { Field, Filters, FiltersClear, FiltersItem, FiltersMenu, FiltersMenuContent, FiltersMenuTrigger, FiltersProvider, Operator } from "@vuzeno/registry/ui/filters";
import { CalendarIcon, CircleDashedIcon, CircleIcon, CircleMinusIcon, CircleOffIcon, DollarSignIcon, SearchIcon, TagIcon, ToggleRightIcon } from "lucide-vue-next";
import { type Component, h, type Ref, ref, type VNode } from "vue";

const statusItems = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Pending", value: "pending" },
  { label: "Cancelled", value: "cancelled" },
];

const statusIcons: Record<string, { icon: Component; class: string }> = {
  active: { icon: CircleIcon, class: "size-3.5! rounded-full" },
  inactive: { icon: CircleMinusIcon, class: "size-3.5! rounded-full text-muted-foreground" },
  pending: { icon: CircleDashedIcon, class: "size-3.5! rounded-full text-yellow-500" },
  cancelled: { icon: CircleOffIcon, class: "size-3.5! rounded-full text-red-400" },
};

function statusLabel(value: string): string {
  return statusItems.find((item) => item.value === value)?.label ?? value;
}

function renderStatusIcon(value: string): VNode | undefined {
  const statusIcon = statusIcons[value];

  if (!statusIcon) {
    return undefined;
  }

  return h(statusIcon.icon, { class: [statusIcon.class, "bg-background"], key: value });
}

function renderStatusOption(option: { label: string; value: string }) {
  return h("div", { class: "flex items-center gap-2 w-full ml-2" }, [renderStatusIcon(option.value), h("span", option.label), h("span", { class: "text-muted-foreground ml-auto" }, `(${10} issues)`)]);
}

function renderSingleStatusValue(value: string) {
  return h("div", { class: "flex items-center gap-2" }, [renderStatusIcon(value), h("span", statusLabel(value))]);
}

function renderManyStatusValues(values: string[]) {
  const icons = values
    .slice(0, 3)
    .map((value) => renderStatusIcon(value))
    .filter((icon): icon is VNode => icon !== undefined);

  return h("div", { class: "flex items-center gap-2" }, [h("div", { class: "flex -space-x-1" }, icons), `${values.length} ${values.length === 1 ? "status" : "statuses"}`]);
}

const variant = ref<FiltersVariant>("outline");
const size = ref<FiltersSize>("sm");

const fields = ref([
  Field.TextField({
    key: "q",
    label: "Search",
    icon: SearchIcon,
    operators: [Operator.Contain({ label: "contains" }), Operator.Eq({ label: "is" })],
  }),
  Field.TextField({
    key: "status",
    label: "Status",
    icon: TagIcon,
    operators: [
      Operator.Eq({
        label: "is",
        inputType: "select",
        options: {
          items: statusItems,
          searchable: true,
          renderOption: renderStatusOption,
          renderValue: renderSingleStatusValue,
        },
      }),
      Operator.In({
        label: "any of",
        options: {
          items: statusItems,
          searchable: true,
          renderOption: renderStatusOption,
          renderValue: renderManyStatusValues,
        },
        default: true,
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
    operators: [Operator.Lt({ label: "less than", default: true, defaultValue: 500 }), Operator.Btw({ label: "between" })],
  }),
  Field.BooleanField({
    key: "is_active",
    label: "Active",
    icon: ToggleRightIcon,
    operators: [Operator.Eq({ label: "is", defaultValue: true }), Operator.Null({ label: "is empty" })],
  }),
  Field.Submenu({
    label: "Dates",
    icon: CalendarIcon,
    fields: [
      Field.DateField({
        key: "created_at",
        label: "Created at",
        icon: CalendarIcon,
        min: today("UTC").subtract({ days: 30 }),
        max: today("UTC").add({ days: 30 }),
        operators: [Operator.Eq({ label: "is" }), Operator.Btw({ label: "between" })],
      }),
      Field.DateField({
        key: "updated_at",
        label: "Updated at",
        icon: CalendarIcon,
        min: today("UTC").subtract({ days: 30 }),
        max: today("UTC").add({ days: 30 }),
        operators: [Operator.Eq({ label: "is" }), Operator.Btw({ label: "between" })],
      }),
      Field.DateField({
        key: "due_date",
        label: "Due date",
        icon: CalendarIcon,
        operators: [
          Operator.Eq({
            label: "is",
            inputType: "select",
            options: {
              items: [
                { label: "Today", value: today("UTC") },
                { label: "Tomorrow", value: today("UTC").add({ days: 1 }) },
                { label: "Next week", value: today("UTC").add({ days: 7 }) },
                { label: "Next month", value: today("UTC").add({ months: 1 }) },
              ],
            },
          }),
        ],
      }),
    ],
  }),
]);

const filters: Ref<Filter[]> = ref([
  { field: "status", operator: "in", value: ["active", "pending"] },
  { field: "price", operator: "btw", value: [100, 500] },
]);
</script>

<template>
  <div class="min-w-96 w-full">
    <FiltersProvider v-model:filters="filters" :fields="fields" :variant="variant" :size="size">
      <FiltersMenu>
        <FiltersMenuTrigger />
        <FiltersMenuContent />
      </FiltersMenu>

      <Filters filter-style="long">
        <FiltersItem
          v-for="filter in filters.filter((current) => !current.hidden)"
          :key="`${filter.field}:${filter.operator}`"
          :filter="filter"
        />
      </Filters>
    </FiltersProvider>
  </div>
</template>
