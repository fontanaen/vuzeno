<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog, useDialog } from "@vuzeno/registry/ui/dialog";

const dialog = useDialog();
</script>

<template>
  <Button variant="secondary" size="sm" @click="dialog.setOpen(true)"
    >Open</Button
  >

  <Dialog.RootProvider :value="dialog">
    <Dialog.Content>
      <Dialog.Title>Account Settings</Dialog.Title>
      <Dialog.Description>
        Manage your account preferences and security options.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.RootProvider>
</template>
