<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Dialog.Root lazy-mount unmount-on-exit>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Lazy Mounted Dialog</Dialog.Title>
      <Dialog.Description>
        This dialog content is only mounted when opened and unmounted when
        closed.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
