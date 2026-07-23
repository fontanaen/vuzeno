<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        File
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
        <Menu.Arrow>
          <Menu.ArrowTip />
        </Menu.Arrow>
        <Menu.Item value="new-file">New File</Menu.Item>
        <Menu.Item value="open">Open...</Menu.Item>
        <Menu.Item value="save">Save</Menu.Item>
        <Menu.Item value="save-as">Save As...</Menu.Item>
    </Menu.Content>
  </Menu.Root>
</template>
