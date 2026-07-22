<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon } from "lucide-vue-next";
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        Edit
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Clipboard</Menu.ItemGroupLabel>
          <Menu.Item value="cut">Cut</Menu.Item>
          <Menu.Item value="copy">Copy</Menu.Item>
          <Menu.Item value="paste">Paste</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Selection</Menu.ItemGroupLabel>
          <Menu.Item value="select-all">Select All</Menu.Item>
          <Menu.Item value="deselect">Deselect</Menu.Item>
        </Menu.ItemGroup>
    </Menu.Content>
  </Menu.Root>
</template>
