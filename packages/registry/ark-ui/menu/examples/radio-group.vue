<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ref } from "vue";

const sortBy = ref("date");
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        Sort
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
      <Menu.ItemGroup>
        <Menu.ItemGroupLabel>Sort By</Menu.ItemGroupLabel>
        <Menu.RadioItemGroup v-model="sortBy">
          <Menu.RadioItem value="name">
            <Menu.ItemText>Name</Menu.ItemText>
          </Menu.RadioItem>
          <Menu.RadioItem value="date">
            <Menu.ItemText>Date Modified</Menu.ItemText>
          </Menu.RadioItem>
          <Menu.RadioItem value="size">
            <Menu.ItemText>Size</Menu.ItemText>
          </Menu.RadioItem>
          <Menu.RadioItem value="type">
            <Menu.ItemText>Type</Menu.ItemText>
          </Menu.RadioItem>
        </Menu.RadioItemGroup>
      </Menu.ItemGroup>
    </Menu.Content>
  </Menu.Root>
</template>
