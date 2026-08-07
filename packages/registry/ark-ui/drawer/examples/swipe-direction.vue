<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Root swipe-direction="end">
    <Drawer.Trigger>
      <Button variant="outline" size="sm">
        Open Right
      </Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Title>Right Drawer</Drawer.Title>
      <p>This drawer slides in from the right side.</p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
