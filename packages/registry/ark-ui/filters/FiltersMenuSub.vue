<script setup lang="ts">
import { Menu } from "@vuzeno/registry/ui/menu";
import { injectFiltersContext } from "./context";
import FiltersMenuItem from "./FiltersMenuItem.vue";
import FiltersMenuList from "./FiltersMenuList.vue";
import { type FieldSubmenu } from "./field";
import { filtersMenuItemVariants } from "./variants";

defineProps<{
  submenu: FieldSubmenu;
}>();

const { size } = injectFiltersContext();
</script>

<template>
<Menu.Root>
    <Menu.TriggerItem :class="filtersMenuItemVariants({ size })">
      <component :is="submenu.icon" v-if="submenu.icon" class="size-4 text-muted-foreground" />
      {{ submenu.label }}
    </Menu.TriggerItem>
    
    <Menu.Content class="min-w-48 border border-muted">
      <FiltersMenuList :items="submenu.fields" />
    </Menu.Content>
  </Menu.Root>
</template>
