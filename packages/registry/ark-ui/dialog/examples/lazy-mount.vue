<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root lazy-mount unmount-on-exit>
    <Dialog.Trigger as-child>
      <Button variant="secondary" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>Lazy Mounted Dialog</Dialog.Title>
      <Dialog.Description>
        This dialog content is only mounted when opened and unmounted when
        closed.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
