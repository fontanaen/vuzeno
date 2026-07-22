<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Popover.Root :positioning="{ sameWidth: true }">
    <Popover.Trigger as-child>
      <Button variant="outline" :style="{ minWidth: '200px' }">
        Click Me
      </Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Matched Width</Popover.Title>
      <Popover.Description>
        This popover matches the width of its trigger element.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
