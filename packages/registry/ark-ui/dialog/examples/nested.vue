<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog, useDialog } from "@vuzeno/registry/ui/dialog";

const parentDialog = useDialog();
const childDialog = useDialog();
</script>

<template>
  <Button variant="outline" size="sm" @click="parentDialog.setOpen(true)"
    >Open Parent Dialog</Button
  >

  <Dialog.RootProvider :value="parentDialog">
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Parent Dialog</Dialog.Title>
      <Dialog.Description>
        This is the parent dialog. Open a nested dialog from here.
      </Dialog.Description>
      <Dialog.Actions>
        <Button variant="outline" size="sm" @click="childDialog.setOpen(true)"
          >Open Nested</Button
        >
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.RootProvider>

  <Dialog.RootProvider :value="childDialog">
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Nested Dialog</Dialog.Title>
      <Dialog.Description>
        This is a nested dialog with proper z-index layering.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.RootProvider>
</template>
