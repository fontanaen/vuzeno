<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Popover } from "@vuzeno/registry/ui/popover";
</script>

<template>
  <Popover.Root>
    <Popover.Trigger as-child>
      <Button variant="outline">Click Me</Button>
    </Popover.Trigger>
    <Popover.Content>
      <Popover.Title>Favorite Frameworks</Popover.Title>
      <Popover.Description>
        Manage and organize your favorite web frameworks.
      </Popover.Description>
    </Popover.Content>
  </Popover.Root>
</template>
