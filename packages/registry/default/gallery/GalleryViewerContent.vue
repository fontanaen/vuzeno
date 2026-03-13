<script setup lang="ts">
import { DialogContent, DialogOverlay, DialogPortal } from "reka-ui";
import { SidebarProvider } from "@/components/ui/sidebar";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const { sidebarOpen } = injectGalleryViewerContext();
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="bg-black/80 fixed inset-0 z-30" />
    <DialogContent class="fixed top-0 left-0 z-50 touch-none z-100 w-screen h-screen" @open-auto-focus.prevent>
      <SidebarProvider v-bind="$attrs" v-model:open="sidebarOpen">
        <slot />
      </SidebarProvider>
    </DialogContent>
  </DialogPortal>
</template>