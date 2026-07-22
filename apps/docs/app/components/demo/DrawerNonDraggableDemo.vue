<script setup lang="ts">
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger>Open</Drawer.Trigger>
    <Drawer.Content :draggable="false">
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
