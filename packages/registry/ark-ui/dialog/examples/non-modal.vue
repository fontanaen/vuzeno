<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root :modal="false">
    <Dialog.Trigger as-child>
      <Button variant="secondary" size="sm">Open Non-Modal</Button>
    </Dialog.Trigger>
    <Dialog.Content :backdrop="false">
      <Dialog.Title>Non-Modal Dialog</Dialog.Title>
      <Dialog.Description>
        This dialog allows interaction with elements outside while open.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
