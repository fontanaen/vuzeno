<script setup lang="ts">
import { SidebarInset } from "@/components/ui/sidebar";
import Gallery, { type GalleryProps } from "./Gallery.vue";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const props = defineProps<Omit<GalleryProps, "zoomScale">>();

const zoomScale = defineModel<number>("zoomScale", { default: 1 });

const { selectedIndex, setSelectedIndex } = injectGalleryViewerContext();
</script>

<template>
  <SidebarInset class="p-6 bg-transparent">
    <Gallery 
      v-model:zoom-scale="zoomScale" 
      v-bind="props" 
      :initial-index="selectedIndex" 
      class="relative flex flex-col gap-6 h-full" v-slot="{ selectedIndex, isZoomed }"
      @update:selectedIndex="setSelectedIndex"
    >
      <slot :selected-index="selectedIndex" :is-zoomed="isZoomed" />
    </Gallery> 
  </SidebarInset>
</template>