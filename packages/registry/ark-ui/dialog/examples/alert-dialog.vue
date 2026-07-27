<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root role="alertdialog">
    <Dialog.Trigger as-child>
      <Button variant="secondary" size="sm">Delete Account</Button>
    </Dialog.Trigger>
    
    <Dialog.Content>
      <Dialog.Title>Are you absolutely sure?</Dialog.Title>
      <Dialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Dialog.Description>
      <Dialog.Actions>
        <Dialog.CloseTrigger as-child>
          <Button variant="secondary" size="sm">Cancel</Button>
        </Dialog.CloseTrigger>
        <Button variant="destructive" size="sm">Delete Account</Button>
      </Dialog.Actions>
    </Dialog.Content>
  </Dialog.Root>
</template>
