<script setup lang="ts">
import { Menu } from "@vuzeno/registry/ui/menu";
import FiltersMenuItem from "./FiltersMenuItem.vue";
import FiltersMenuSub from "./FiltersMenuSub.vue";
import { type FilterFieldItem, isField, isFieldGroup, isFieldSubmenu } from "./field";

defineProps<{ items: FilterFieldItem[] }>();
</script>

<template>
  <template v-for="(item, index) in items" :key="isField(item) ? item.key : `node:${index}:${item.label}`">
    <FiltersMenuItem v-if="isField(item)" :field="item" />
    <FiltersMenuSub v-else-if="isFieldSubmenu(item)" :submenu="item" />
    <Menu.ItemGroup v-else-if="isFieldGroup(item)" :class="{ 'mb-2': index !== items.length - 1 }">
      <Menu.ItemGroupLabel class="text-xs font-medium text-muted-foreground normal-case">
        {{ item.label }}
      </Menu.ItemGroupLabel>
      <FiltersMenuItem v-for="field in item.fields" :key="field.key" :field="field" />
    </Menu.ItemGroup>
  </template>
</template>
