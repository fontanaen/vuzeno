<script setup lang="ts">
import type { Filter } from "@vuzeno/registry/ui/filters";
import { Field, Filters, FiltersClear, FiltersItem, FiltersMenu, FiltersMenuContent, FiltersMenuTrigger, FiltersProvider, Operator } from "@vuzeno/registry/ui/filters";
import { Button } from "@vuzeno/ui/components/button";
import { PlusIcon, TagIcon, UserIcon } from "lucide-vue-next";
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
          ],
        },
      }),
    ],
  }),
]);

const filters: Ref<Filter[]> = ref([]);
</script>

<template>
  <div class="min-w-96 w-full">
    <FiltersProvider v-model:filters="filters" :fields="fields" variant="outline" size="md">
      <FiltersMenu>
        <FiltersMenuTrigger>
          <Button variant="outline" size="sm">
            <PlusIcon class="size-4" />
            Add filter
          </Button>
        </FiltersMenuTrigger>
        <FiltersMenuContent />
      </FiltersMenu>

      <Filters>
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
