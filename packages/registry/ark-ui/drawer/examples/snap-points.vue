<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Root :snap-points="[0.25, 0.5, 1]" :default-active-snap-point="0.5">
    <Drawer.Trigger>
      <Button variant="outline" size="sm">
        Open
      </Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Drawer with Snap Points</Drawer.Title>
      <p>
        This drawer has multiple snap points at 25%, 50%, and 100% of the
        viewport height.
      </p>
      <p>
        Drag the grabber to snap between different heights, or swipe to dismiss.
      </p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
