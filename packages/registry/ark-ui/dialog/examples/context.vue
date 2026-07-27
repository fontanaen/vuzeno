<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="secondary" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>Status</Dialog.Title>
      <Dialog.Description>
        <Dialog.Context v-slot="dialog">
          <span>Dialog is {{ dialog.open ? "open" : "closed" }}</span>
        </Dialog.Context>
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
