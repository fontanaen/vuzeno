<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel } from "@vuzeno/ui/components/dropdown-menu";
import { injectFiltersContext } from "./context";
import FiltersMenuItem from "./FiltersMenuItem.vue";
import FiltersMenuSub from "./FiltersMenuSub.vue";
import { isField, isFieldGroup, isFieldSubmenu } from "./field";

const { fields } = injectFiltersContext();
</script>

<template>
  <DropdownMenuContent align="start" class="min-w-48">
    <template v-for="(item, index) in fields" :key="isField(item) ? item.key : `node:${index}:${item.label}`">
      <FiltersMenuItem v-if="isField(item)" :field="item" />

      <FiltersMenuSub v-else-if="isFieldSubmenu(item)" :submenu="item" />

      <DropdownMenuGroup v-else-if="isFieldGroup(item)" :class="{ 'mb-2': index !== fields.length - 1 }">
        <DropdownMenuLabel class="text-xs font-medium text-muted-foreground">
          {{ item.label }}
        </DropdownMenuLabel>
        <FiltersMenuItem v-for="field in item.fields" :key="field.key" :field="field" />
      </DropdownMenuGroup>
    </template>
  </DropdownMenuContent>
</template>
