<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Root :modal="false">
    <Drawer.Trigger>
      <Button variant="outline" size="sm">
        Open
      </Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Non-Modal Drawer</Drawer.Title>
      <p>
        You can interact with the rest of the page while this drawer is open.
      </p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
