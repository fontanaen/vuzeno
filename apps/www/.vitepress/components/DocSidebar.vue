<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@vuetella/ui/components/collapsible";
import { ChevronDownIcon } from "lucide-vue-next";
import type { DefaultTheme } from "vitepress/theme";
import DocSidebarItem from "./DocSidebarItem.vue";

defineProps<{
  items: DefaultTheme.SidebarItem[];
}>();
</script>
  
<template>
  <div
    v-for="item in items"
    :key="item.text"
  >
    <Collapsible
      v-if="item.items?.length"
      v-slot="{ open }"
      class="mb-6"
      :default-open="true"
    >
      <CollapsibleTrigger class="pl-4 font-bold text-sm pb-2 inline-flex justify-between w-full items-center pr-4 group">
        <span class="text-foreground font-bold text-xs">{{ item.text }}</span>
        <ChevronDownIcon
          class="size-4 text-muted-foreground group-hover:text-foreground transition"
          :class="{ '-rotate-90': !open }"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <DocSidebarItem
          v-for="subitem in item.items"
          :key="subitem.text"
          :item="subitem"
        />
      </CollapsibleContent>
    </Collapsible>

    <DocSidebarItem
      v-else
      :item="item"
    />
  </div>
</template>
