<script setup lang="ts">
import { XIcon } from "@lucide/vue";
import { Drawer } from "@vuzeno/registry/ui/drawer";
</script>

<template>
  <Drawer.Stack>
    <Drawer.IndentBackground class="rounded-lg bg-muted" />
    <Drawer.Indent class="rounded-lg border border-border p-8">
      <Drawer.Root>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Title>Stacked Drawer</Drawer.Title>
          <p>
            This drawer uses indent background and indent effects when swiped.
          </p>
          <Drawer.CloseTrigger>
            <XIcon />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Root>
    </Drawer.Indent>
  </Drawer.Stack>
</template>
