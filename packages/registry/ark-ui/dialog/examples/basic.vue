<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline" size="sm">Open Dialog</Button>
    </Dialog.Trigger>

    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Welcome Back</Dialog.Title>
        <Dialog.Description>
          Sign in to your account to continue.
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Footer>
        <Dialog.CloseTrigger as-child>
          <Button variant="outline" size="sm">Cancel</Button>
        </Dialog.CloseTrigger>
        
        <Button size="sm">Sign in</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</template>
