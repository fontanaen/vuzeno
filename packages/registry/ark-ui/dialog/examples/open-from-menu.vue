<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="secondary" size="sm">
        Actions
        <Menu.Indicator>
          <ChevronDownIcon />
        </Menu.Indicator>
      </Button>
    </Menu.Trigger>
    <Menu.Content>
      <Menu.Item value="edit">Edit</Menu.Item>
      <Menu.Item value="duplicate">Duplicate</Menu.Item>
      <Menu.Separator />
      <Menu.Item value="delete" @click="open = true">Delete...</Menu.Item>
    </Menu.Content>
  </Menu.Root>

  <Dialog.Root v-model:open="open" role="alertdialog">
    <Dialog.Content>
      <Dialog.Title>Confirm Delete</Dialog.Title>
      <Dialog.Description>
        Are you sure you want to delete this item? This action cannot be undone.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
