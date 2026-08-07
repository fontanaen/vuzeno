<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog, useDialog } from "@vuzeno/registry/ui/dialog";

const parentDialog = useDialog();
const childDialog = useDialog();
</script>

<template>
  <Button variant="secondary" size="sm" @click="parentDialog.setOpen(true)"
    >Open Parent Dialog</Button
  >

  <Dialog.RootProvider :value="parentDialog">
    <Dialog.Content>
      <Dialog.Title>Parent Dialog</Dialog.Title>
      <Dialog.Description>
        This is the parent dialog. Open a nested dialog from here.
      </Dialog.Description>
      <Dialog.Actions>
        <Button variant="secondary" size="sm" @click="childDialog.setOpen(true)">
          Open Nested
        </Button>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.RootProvider>

  <Dialog.RootProvider :value="childDialog">
    <Dialog.Content>
      <Dialog.Title>Nested Dialog</Dialog.Title>
      <Dialog.Description>
        This is a nested dialog with proper z-index layering.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.RootProvider>
</template>
