<script setup lang="ts">
import { SidebarProvider } from "@vuzeno/ui/components/sidebar";
import { DialogContent, DialogOverlay, DialogPortal } from "reka-ui";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const { sidebarOpen } = injectGalleryViewerContext();
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200 fixed inset-0 z-30" />
    <DialogContent :class="'fixed top-0 left-0 z-50 touch-none z-100 w-screen h-screen data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200'">
      <SidebarProvider v-bind="$attrs" v-model:open="sidebarOpen">
        <slot />
      </SidebarProvider>
    </DialogContent>
  </DialogPortal>
</template>