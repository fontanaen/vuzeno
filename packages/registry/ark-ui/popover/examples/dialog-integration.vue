<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Dialog } from "@vuzeno/registry/ui/dialog";
import { Popover } from "@vuzeno/registry/ui/popover";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button variant="outline">Open Dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Edit Profile</Dialog.Title>
        <Dialog.Description>
          Update your profile information below.
        </Dialog.Description>
      </Dialog.Header>

      <Dialog.Body>
        <Popover.Root lazy-mount unmount-on-exit>
          <Popover.Trigger as-child>
            <Button variant="outline">More Options</Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.CloseTrigger>
              <XIcon />
            </Popover.CloseTrigger>
            <Popover.Title>Additional Settings</Popover.Title>
            <Popover.Description>
              This popover renders correctly above the dialog.
            </Popover.Description>
          </Popover.Content>
        </Popover.Root>
      </Dialog.Body>
    </Dialog.Content>
  </Dialog.Root>
</template>
