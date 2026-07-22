<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Menu } from "@vuzeno/registry/ui/menu";
import { ChevronDownIcon, XIcon } from "lucide-vue-next";
import { ref } from "vue";

const dialogOpen = ref(false);
</script>

<template>
  <Menu.Root>
    <Menu.Trigger as-child>
      <Button variant="outline" size="sm">
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
      <Menu.Item value="delete" @click="dialogOpen = true">Delete...</Menu.Item>
    </Menu.Content>
  </Menu.Root>

  <Dialog.Root v-model:open="dialogOpen" role="alertdialog">
    <Dialog.Content>
      <Dialog.Title>Confirm Delete</Dialog.Title>
      <Dialog.Description>
        Are you sure you want to delete this item? This action cannot be undone.
      </Dialog.Description>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Actions>
        <Button variant="outline" size="sm" @click="dialogOpen = false"
          >Cancel</Button
        >
        <Button size="sm" @click="dialogOpen = false">Delete</Button>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.Root>
</template>
