<script setup lang="ts">
import type { Filter, FiltersSize, FiltersVariant } from "@vuzeno/registry/legacy/filters";
import { Field, Filters, FiltersClear, FiltersItem, FiltersMenu, FiltersMenuContent, FiltersMenuTrigger, FiltersProvider, Operator } from "@vuzeno/registry/legacy/filters";
import { Field as UiField } from "@vuzeno/registry/ui/field";
import { Tabs } from "@vuzeno/registry/ui/tabs";
import { DollarSignIcon, TagIcon, UserIcon } from "lucide-vue-next";
import { type Ref, ref } from "vue";

const variant = ref<FiltersVariant>("outline");
const size = ref<FiltersSize>("sm");
const filterStyle = ref<"short" | "long">("short");

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
  <div class="flex min-w-96 w-full flex-col gap-4">
    <div class="flex flex-col gap-4 border border-muted border-dashed rounded-md p-4">
      <UiField orientation="vertical" class="w-72 mx-auto">
        <Tabs.Root v-model="variant" class="w-full">
          <Tabs.TabList class="grid w-full grid-cols-2 gap-1 bg-muted p-1">
            <Tabs.TabTrigger value="outline" class="text-xs">Outline</Tabs.TabTrigger>
            <Tabs.TabTrigger value="secondary" class="text-xs">Secondary</Tabs.TabTrigger>
          </Tabs.TabList>
        </Tabs.Root>
      </UiField>

      <UiField orientation="vertical" class="w-72 mx-auto">
        <Tabs.Root v-model="size" class="w-full">
          <Tabs.TabList class="grid w-full grid-cols-3 gap-1 bg-muted p-1 text-xs">
            <Tabs.TabTrigger value="sm" class="text-xs">sm</Tabs.TabTrigger>
            <Tabs.TabTrigger value="md" class="text-xs">md</Tabs.TabTrigger>
            <Tabs.TabTrigger value="lg" class="text-xs">lg</Tabs.TabTrigger>
          </Tabs.TabList>
        </Tabs.Root>
      </UiField>

      <UiField orientation="vertical" class="w-72 mx-auto">
        <Tabs.Root v-model="filterStyle" class="w-full">
          <Tabs.TabList class="grid w-full grid-cols-2 gap-1 bg-muted p-1 text-xs">
            <Tabs.TabTrigger value="short" class="text-xs">short</Tabs.TabTrigger>
            <Tabs.TabTrigger value="long" class="text-xs">long</Tabs.TabTrigger>
          </Tabs.TabList>
        </Tabs.Root>
      </UiField>
    </div>

    <FiltersProvider v-model:filters="filters" :fields="fields" :variant="variant" :size="size">
      <FiltersMenu>
        <FiltersMenuTrigger />
        <FiltersMenuContent />
      </FiltersMenu>

      <Filters :filter-style="filterStyle">
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
