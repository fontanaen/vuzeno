<script setup lang="ts">
import { CheckIcon, ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ref } from "vue";

const showToolbar = ref(true);
const showStatusBar = ref(false);
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
        View
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
      <Menu.CheckboxItem v-model:checked="showToolbar" value="toolbar">
        <Menu.ItemText>Show Toolbar</Menu.ItemText>
      </Menu.CheckboxItem>
      <Menu.CheckboxItem v-model:checked="showStatusBar" value="status-bar">
        <Menu.ItemText>Show Status Bar</Menu.ItemText>
      </Menu.CheckboxItem>
    </Menu.Content>
  </Menu.Root>
</template>
