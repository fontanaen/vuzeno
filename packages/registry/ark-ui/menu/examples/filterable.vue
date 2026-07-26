<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { ref } from "vue";

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Qwik", value: "qwik" },
];

const selected = ref<string | null>(null);

const { collection, searchTerm } = useMenuFilterCollection({
  initialItems: items,
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
  filter: (itemString, filterText) => itemString.toLowerCase().includes(filterText.toLowerCase()),
});

function selectOption(value: string) {
  selected.value = value;
}
</script>

<template>
  <Menu.Root :typeahead="false">
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        {{ items.find((item) => item.value === selected)?.label ?? "Select framework" }}
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>

    <Menu.Content class="p-0 min-w-48">
      <Menu.Filter v-model:search-term="searchTerm">
        <Menu.FilterInput placeholder="Search framework" />
      </Menu.Filter>

      <Menu.Empty v-if="collection.items.length === 0">
        No results found.
      </Menu.Empty>

      <div class="p-1">
        <Menu.Item
          v-for="item in collection.items"
          :key="item.value"
          :value="item.value"
          @click="selectOption(item.value)"
        >
          <Menu.ItemText>{{ item.label }}</Menu.ItemText>
          <CheckIcon
            class="ml-auto size-4 text-primary"
            :class="{ 'opacity-0': selected !== item.value }"
          />
        </Menu.Item>
      </div>
    </Menu.Content>
  </Menu.Root>
</template>
