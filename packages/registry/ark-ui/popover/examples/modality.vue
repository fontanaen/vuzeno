<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
</script>

<template>
  <Popover.Root modal>
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Confirm Action</Popover.Title>
      <Popover.Description>
        Focus is trapped inside this modal popover until dismissed.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
