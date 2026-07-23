<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog, useDialog } from "@vuzeno/registry/ui/dialog";
import { Textarea } from "@vuzeno/registry/ui/textarea";
import { ref } from "vue";

const formContent = ref("");
const open = ref(false);
const confirmDialog = useDialog();

function onOpenChange(details: { open: boolean }) {
  if (!details.open && formContent.value.trim()) {
    confirmDialog.value.setOpen(true);
    open.value = true;
    return;
  }

  open.value = details.open;
}

function handleConfirmClose() {
  confirmDialog.value.setOpen(false);
  open.value = false;
  formContent.value = "";
}
</script>

<template>
  <Button variant="outline" size="sm" @click="open = true">Open Form</Button>

  <Dialog.Root :open="open" @open-change="onOpenChange">
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Edit Content</Dialog.Title>
      <Dialog.Description>
        Make changes to your content. You'll be asked to confirm if you have
        unsaved changes.
      </Dialog.Description>
      <Dialog.Body>
        <Textarea
          v-model="formContent"
          placeholder="Enter some text..."
          :rows="4"
        />
      </Dialog.Body>
    </Dialog.Content>
  </Dialog.Root>

  <Dialog.RootProvider :value="confirmDialog">
    <Dialog.Content>
      <Dialog.Title>Unsaved Changes</Dialog.Title>
      <Dialog.Description>
        You have unsaved changes. Are you sure you want to discard them?
      </Dialog.Description>
      <Dialog.Actions>
        <Button
          variant="outline"
          size="sm"
          @click="confirmDialog.setOpen(false)"
          >Keep Editing</Button
        >
        <Button size="sm" @click="handleConfirmClose">Discard</Button>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.RootProvider>
</template>
