<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger>
      <Button variant="outline" size="sm">
        Open
      </Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Drawer Title</Drawer.Title>
      <p>This is the content of the drawer.</p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
