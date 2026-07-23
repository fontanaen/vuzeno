<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button variant="outline" size="sm" @click="open = true">Toggle</Button>
  <Dialog.Root v-model:open="open">
    <Dialog.Content>
      <Dialog.CloseTrigger as-child>
        <Button variant="outline" size="sm">
          <XIcon />
        </Button>
      </Dialog.CloseTrigger>
      <Dialog.Title>Session Settings</Dialog.Title>
      <Dialog.Description>
        Manage your session preferences and security options.
      </Dialog.Description>
    </Dialog.Content>
  </Dialog.Root>
</template>
