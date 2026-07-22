<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

const buttonRef = ref<HTMLButtonElement | null>(null);
</script>

<template>
  <div class="flex flex-col gap-3">
    <Button ref="buttonRef" variant="outline" size="sm">Focus Target</Button>
    <Dialog.Root :final-focus-el="() => buttonRef">
      <Dialog.Trigger as-child>
        <Button variant="outline" size="sm">Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.CloseTrigger as-child>
          <Button variant="outline" size="sm">
            <XIcon />
          </Button>
        </Dialog.CloseTrigger>
        <Dialog.Title>Custom Focus Return</Dialog.Title>
        <Dialog.Description>
          When this dialog closes, focus will return to the "Focus Target"
          button instead of the trigger.
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  </div>
</template>
