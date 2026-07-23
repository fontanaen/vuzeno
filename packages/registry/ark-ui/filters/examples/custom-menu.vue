<script setup lang="ts">
import { PlusIcon, TagIcon, UserIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import type { Filter } from "@vuzeno/registry/ui/filters";
import { Field, Filters, Operator } from "@vuzeno/registry/ui/filters";
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
    <Filters.Provider v-model:filters="filters" :fields="fields" variant="outline" size="md">
      <Filters.Menu>
        <Filters.MenuTrigger>
          <Button variant="outline" size="sm">
            <PlusIcon class="size-4" />
            Add filter
          </Button>
        </Filters.MenuTrigger>
        <Filters.MenuContent />
      </Filters.Menu>

      <Filters.Group>
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
