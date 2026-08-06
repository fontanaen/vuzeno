<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer, useDrawer } from "@vuzeno/registry/ui/drawer";

const drawer = useDrawer({
  defaultSnapPoint: 0.5,
  snapPoints: [0.25, 0.5, 1],
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-2">
      <Button variant="outline" @click="drawer.setOpen(true)">
        Open via API
      </Button>
      <Button variant="outline" @click="drawer.setSnapPoint(0.25)">
        Set to 25%
      </Button>
      <Button variant="outline" @click="drawer.setSnapPoint(1)">
        Set to 100%
      </Button>
    </div>

    <Drawer.RootProvider :value="drawer">
      <Drawer.Content>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Title>Drawer with RootProvider</Drawer.Title>
        <p>
          This drawer is controlled via the useDrawer hook and RootProvider.
        </p>
        <p>Active snap point: {{ drawer.snapPoint }}</p>
        <Drawer.CloseTrigger>
          <XIcon />
        </Drawer.CloseTrigger>
      </Drawer.Content>
    </Drawer.RootProvider>
  </div>
</template>
