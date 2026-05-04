<script setup lang="ts">
import { DropdownMenuGroup, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@vuzeno/ui/components/dropdown-menu";
import { injectFiltersContext } from "./context";
import FiltersMenuItem from "./FiltersMenuItem.vue";
import { type FieldSubmenu, isField, isFieldGroup, isFieldSubmenu } from "./field";
import { DropdownItemSizeVariant } from "./sizes";

defineProps<{
  submenu: FieldSubmenu;
}>();

const { size } = injectFiltersContext();
</script>

<template>
  <DropdownMenuSub>
    <DropdownMenuSubTrigger :class="DropdownItemSizeVariant[size]">
      <component :is="submenu.icon" v-if="submenu.icon" class="size-4 mr-2 text-muted-foreground" />
      {{ submenu.label }}
    </DropdownMenuSubTrigger>

    <DropdownMenuPortal>
      <DropdownMenuSubContent class="min-w-48">
        <template v-for="(item, index) in submenu.fields" :key="isField(item) ? item.key : `node:${index}:${item.label}`">
          <FiltersMenuItem v-if="isField(item)" :field="item" />

          <FiltersMenuSub v-else-if="isFieldSubmenu(item)" :submenu="item" />

          <DropdownMenuGroup v-else-if="isFieldGroup(item)" :class="{ 'mb-2': index !== submenu.fields.length - 1 }">
            <DropdownMenuLabel class="text-xs font-medium text-muted-foreground">
              {{ item.label }}
            </DropdownMenuLabel>
            <FiltersMenuItem v-for="field in item.fields" :key="field.key" :field="field" />
          </DropdownMenuGroup>
        </template>
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  </DropdownMenuSub>
</template>
