<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Popover.Root>
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Arrow>
        <Popover.ArrowTip />
      </Popover.Arrow>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Notifications</Popover.Title>
      <Popover.Description>
        You have 3 unread messages in your inbox.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
