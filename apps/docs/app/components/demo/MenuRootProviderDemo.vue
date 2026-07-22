<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Menu, useMenu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon } from "lucide-vue-next";

const menu = useMenu();
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="sm" @click="menu.api.value.setHighlightedValue('copy')">
      Highlight Copy
    </Button>
    <Menu.RootProvider :value="menu">
      <Menu.Trigger as-child>
        <Button variant="outline" size="sm">
          Edit
          <Menu.Indicator>
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="cut">Cut</Menu.Item>
        <Menu.Item value="copy">Copy</Menu.Item>
        <Menu.Item value="paste">Paste</Menu.Item>
        <Menu.Item value="delete">Delete</Menu.Item>
      </Menu.Content>
    </Menu.RootProvider>
  </div>
</template>
