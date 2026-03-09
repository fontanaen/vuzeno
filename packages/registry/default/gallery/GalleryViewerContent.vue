<script setup lang="ts">
import { DialogContent, DialogPortal } from "reka-ui";
import { SidebarProvider } from "@/components/ui/sidebar";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const { sidebarOpen, defaultSidebarOpen } = injectGalleryViewerContext();
</script>

<template>
  <DialogPortal>
    <DialogContent :class="'fixed top-0 left-0 z-50 touch-none w-screen h-screen duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-97 data-[state=open]:zoom-in-97'">
      <SidebarProvider v-bind="$attrs" v-model:open="sidebarOpen" :default-open="defaultSidebarOpen">
        <slot />
      </SidebarProvider>
    </DialogContent>
  </DialogPortal>
</template>