<script setup lang="ts">
import { Drawer } from "@vuzeno/registry/ui/drawer";
import { XIcon } from "lucide-vue-next";
</script>

<template>
  <Drawer.Root>
    <Drawer.Trigger>Open</Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Grabber>
        <Drawer.GrabberIndicator />
      </Drawer.Grabber>
      <Drawer.Title>Scrollable Drawer</Drawer.Title>
      <Drawer.CloseTrigger>
        <XIcon />
      </Drawer.CloseTrigger>
      <div
        class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-y-contain py-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-accent [&::-webkit-scrollbar-track]:bg-transparent"
      >
        <div
          v-for="index in 50"
          :key="index"
          class="flex h-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted px-4 text-sm font-medium text-foreground hover:bg-accent"
        >
          Item {{ index }}
        </div>
      </div>
    </Drawer.Content>
  </Drawer.Root>
</template>
