<script setup lang="ts">
import { Menu } from "@vuzeno/registry/ui/menu";
</script>

<template>
  <Menu.Root>
    <Menu.ContextTrigger>Right click here</Menu.ContextTrigger>
    <Menu.Content>
      <Menu.Item value="cut">Cut</Menu.Item>
      <Menu.Item value="copy">Copy</Menu.Item>
      <Menu.Item value="paste">Paste</Menu.Item>
      <Menu.Separator />
      <Menu.Item value="delete">Delete</Menu.Item>
    </Menu.Content>
  </Menu.Root>
</template>
