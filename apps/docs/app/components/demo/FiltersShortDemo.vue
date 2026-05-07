<script setup lang="ts">
import type { Filter, FiltersSize, FiltersVariant } from "@vuzeno/registry/ui/filters";
import { Field, Filters, FiltersClear, FiltersItem, FiltersMenu, FiltersMenuContent, FiltersMenuTrigger, FiltersProvider, Operator } from "@vuzeno/registry/ui/filters";
import { FieldLabel, Field as UiField } from "@vuzeno/ui/components/field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@vuzeno/ui/components/tabs";
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
        <Tabs v-model="variant" class="w-full">
          <TabsList class="grid w-full grid-cols-2 gap-1 bg-muted p-1">
            <TabsTrigger value="outline" class="text-xs">Outline</TabsTrigger>
            <TabsTrigger value="secondary" class="text-xs">Secondary</TabsTrigger>
          </TabsList>
        </Tabs>
      </UiField>

      <UiField orientation="vertical" class="w-72 mx-auto">
        <Tabs v-model="size" class="w-full">
          <TabsList class="grid w-full grid-cols-3 gap-1 bg-muted p-1 text-xs">
            <TabsTrigger value="sm" class="text-xs">sm</TabsTrigger>
            <TabsTrigger value="md" class="text-xs">md</TabsTrigger>
            <TabsTrigger value="lg" class="text-xs">lg</TabsTrigger>
          </TabsList>
        </Tabs>
      </UiField>

      <UiField orientation="vertical" class="w-72 mx-auto">
        <Tabs v-model="filterStyle" class="w-full">
          <TabsList class="grid w-full grid-cols-2 gap-1 bg-muted p-1 text-xs">
            <TabsTrigger value="short" class="text-xs">short</TabsTrigger>
            <TabsTrigger value="long" class="text-xs">long</TabsTrigger>
          </TabsList>
        </Tabs>
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
