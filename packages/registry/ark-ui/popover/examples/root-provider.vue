<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover, usePopover } from "@vuzeno/registry/ui/popover";

const popover = usePopover({
  positioning: {
    placement: "bottom-start",
  },
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <output>Popover is {{ popover.open ? "open" : "closed" }}</output>
    <Popover.RootProvider :value="popover">
      <Popover.Trigger as-child>
        <Button variant="outline">Toggle Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Title>Controlled Externally</Popover.Title>
        <Popover.Description>
          This popover is controlled via the usePopover hook.
        </Popover.Description>
      </Popover.Content>
    </Popover.RootProvider>
  </div>
</template>
