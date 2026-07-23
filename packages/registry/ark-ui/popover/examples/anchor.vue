<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Input } from "@vuzeno/registry/ui/input";
import { Popover } from "@vuzeno/registry/ui/popover";
</script>

<template>
  <Popover.Root>
    <div class="flex items-center gap-2">
      <Popover.Trigger as-child>
        <Button variant="outline">Click Me</Button>
      </Popover.Trigger>
      <Popover.Anchor>
        <Input placeholder="Type here..." />
      </Popover.Anchor>
    </div>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Title</Popover.Title>
      <Popover.Description>Description</Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
