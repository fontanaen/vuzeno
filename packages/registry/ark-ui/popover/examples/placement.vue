<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
</script>

<template>
  <Popover.Root
    :positioning="{
      placement: 'left-start',
      offset: { mainAxis: 12, crossAxis: 12 },
    }"
  >
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.CloseTrigger>
        <XIcon />
      </Popover.CloseTrigger>
      <Popover.Title>Left Placement</Popover.Title>
      <Popover.Description>
        This popover appears on the left with custom offset values.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
