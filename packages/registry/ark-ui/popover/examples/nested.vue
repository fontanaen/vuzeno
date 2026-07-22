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
      <Popover.Title>Settings</Popover.Title>
      <Popover.Description>
        Manage your preferences and account settings.
      </Popover.Description>
      <Popover.Root lazy-mount unmount-on-exit :positioning="{ placement: 'right' }">
        <Popover.Trigger as-child>
          <Button variant="outline">Advanced</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Title>Advanced Settings</Popover.Title>
          <Popover.Description>
            Configure advanced options for power users.
          </Popover.Description>
        </Popover.Content>
      </Popover.Root>
    </Popover.Content>
  </Popover.Root>
</template>
