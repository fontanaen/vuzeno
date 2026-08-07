<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu, useMenuFilterCollection } from "@vuzeno/registry/ui/menu";
import { computed, ref } from "vue";

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Qwik", value: "qwik" },
];

const selected = ref<string[]>([]);

const { collection, searchTerm } = useMenuFilterCollection({
  initialItems: items,
  itemToString: (item) => item.label,
  itemToValue: (item) => item.value,
  filter: (itemString, filterText) => itemString.toLowerCase().includes(filterText.toLowerCase()),
});

const label = computed(() => {
  if (selected.value.length === 0) {
    return "Select frameworks";
  }

  if (selected.value.length === 1) {
    return items.find((item) => item.value === selected.value[0])?.label ?? "1 selected";
  }

  return `${selected.value.length} selected`;
});

function isChecked(value: string) {
  return selected.value.includes(value);
}

function setChecked(value: string, checked: boolean) {
  if (checked) {
    if (!selected.value.includes(value)) {
      selected.value = [...selected.value, value];
    }
    return;
  }

  selected.value = selected.value.filter((current) => current !== value);
}
</script>

<template>
  <Menu.Root :typeahead="false" :close-on-select="false">
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        {{ label }}
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
        <Menu.CheckboxItem
          v-for="item in collection.items"
          :key="item.value"
          :value="item.value"
          :checked="isChecked(item.value)"
          @update:checked="setChecked(item.value, $event)"
        >
          <Menu.ItemText>{{ item.label }}</Menu.ItemText>
        </Menu.CheckboxItem>
      </div>
    </Menu.Content>
  </Menu.Root>
</template>
