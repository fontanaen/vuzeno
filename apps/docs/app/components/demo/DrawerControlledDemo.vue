<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <Button variant="outline" @click="open = !open">
    {{ open ? "Close" : "Open" }} Drawer
  </Button>

  <Drawer.Root v-model:open="open">
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Controlled Drawer</Drawer.Title>
      <p>This drawer is controlled via state.</p>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
    </Drawer.Content>
  </Drawer.Root>
</template>
