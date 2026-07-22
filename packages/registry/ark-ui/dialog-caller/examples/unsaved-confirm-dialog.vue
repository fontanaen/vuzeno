<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { DialogCaller, useDialogCallerContext } from "@vuzeno/registry/ui/dialog-caller";

const call = useDialogCallerContext();
</script>

<template>
  <DialogCaller.DialogShell>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Unsaved changes</Dialog.Title>
        <Dialog.Description>
          You have unsaved changes. Are you sure you want to discard them?
        </Dialog.Description>
      </Dialog.Header>
      <Dialog.Footer>
        <Button variant="outline" size="sm" @click="call.reject('keep-editing')">
          Keep editing
        </Button>
        <Button variant="destructive" size="sm" @click="call.resolve(true)">
          Discard
        </Button>
      </Dialog.Footer>
    </Dialog.Content>
  </DialogCaller.DialogShell>
</template>
