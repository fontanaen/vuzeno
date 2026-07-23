<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Status</Dialog.Title>
      <Dialog.Description>
        <Dialog.Context v-slot="dialog">
          <span>Dialog is {{ dialog.open ? "open" : "closed" }}</span>
        </Dialog.Context>
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
