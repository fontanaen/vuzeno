<script setup lang="ts">
import { DollarSignIcon, TagIcon, UserIcon } from "@lucide/vue";
import { Field as UiField } from "@vuzeno/registry/ui/field";
import type { Filter, FiltersSize, FiltersVariant } from "@vuzeno/registry/ui/filters";
import { Field, Filters, Operator } from "@vuzeno/registry/ui/filters";
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
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
      <UiField.Root orientation="vertical" class="w-72 mx-auto">
        <UiField.Label>Variant</UiField.Label>

        <SegmentGroup.Root v-model="variant" class="w-full">
          <SegmentGroup.Item value="outline" class="text-xs">Outline</SegmentGroup.Item>
          <SegmentGroup.Item value="secondary" class="text-xs">Secondary</SegmentGroup.Item>
          <SegmentGroup.Indicator />
        </SegmentGroup.Root>
      </UiField.Root>

      <UiField.Root orientation="vertical" class="w-72 mx-auto">
        <UiField.Label>Size</UiField.Label>
      
        <SegmentGroup.Root v-model="size" class="w-full">
          <SegmentGroup.Item value="sm" class="text-xs justify-center items-center">sm</SegmentGroup.Item>
          <SegmentGroup.Item value="md" class="text-xs justify-center">md</SegmentGroup.Item>
          <SegmentGroup.Item value="lg" class="text-xs justify-center">lg</SegmentGroup.Item>
          <SegmentGroup.Indicator />
        </SegmentGroup.Root>
      </UiField.Root>

      <UiField.Root orientation="vertical" class="w-72 mx-auto">
        <UiField.Label>Filter Style</UiField.Label>

        <SegmentGroup.Root v-model="filterStyle" class="w-full">
          <SegmentGroup.Item value="short" class="text-xs">short</SegmentGroup.Item>
          <SegmentGroup.Item value="long" class="text-xs">long</SegmentGroup.Item>
          <SegmentGroup.Indicator />
        </SegmentGroup.Root>
      </UiField.Root>
    </div>

    <Filters.Provider v-model:filters="filters" :fields="fields" :variant="variant" :size="size">
      <Filters.Menu>
        <Filters.MenuTrigger />
        <Filters.MenuContent />
      </Filters.Menu>

      <Filters.Group :filter-style="filterStyle">
        <Filters.Item
          v-for="filter in filters"
          :key="`${filter.field}:${filter.operator}`"
          :filter="filter"
        />
      </Filters.Group>

      <Filters.Clear />
    </Filters.Provider>
  </div>
</template>
