<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Root swipe-direction="end">
    <Drawer.Trigger>Open Right</Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Title>Right Drawer</Drawer.Title>
      <p>This drawer slides in from the right side.</p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
