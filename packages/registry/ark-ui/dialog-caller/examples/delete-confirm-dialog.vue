<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { DialogCaller, useDialogCallerContext } from "@vuzeno/registry/ui/dialog-caller";

defineProps<{
  name: string;
}>();

const call = useDialogCallerContext();
</script>

<template>
  <DialogCaller.DialogShell>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Delete {{ name }}?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. The item will be permanently removed.
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Footer>
        <Button variant="outline" size="sm" @click="call.reject('cancel')">
          Cancel
        </Button>
        <Button variant="destructive" size="sm" @click="call.resolve(true)">
          Delete
        </Button>
      </Dialog.Footer>
    </Dialog.Content>
  </DialogCaller.DialogShell>
</template>
