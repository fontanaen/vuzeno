<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Input } from "@vuzeno/registry/ui/input";
import { ref } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);
</script>

<template>
  <Dialog.Root :initial-focus-el="() => inputRef">
    <Dialog.Trigger as-child>
      <Button variant="secondary" size="sm">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Title>Edit Profile</Dialog.Title>
      <Dialog.Description>
        The name input will be focused when this dialog opens.
      </Dialog.Description>
      <Dialog.Body>
        <Input ref="inputRef" type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
      </Dialog.Body>
    </Dialog.Content>
  </Dialog.Root>
</template>
