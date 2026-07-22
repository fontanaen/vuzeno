<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Popover.Root close-on-escape close-on-interact-outside>
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Quick Actions</Popover.Title>
      <Popover.Description>
        Press Escape or click outside to close this popover.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
