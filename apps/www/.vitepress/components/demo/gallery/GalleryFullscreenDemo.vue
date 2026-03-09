<script setup lang="ts">
import {
  Gallery,
  GalleryContent,
  GalleryImage,
  GalleryImageSource,
  GalleryItem,
  GalleryNext,
  GalleryPrevious,
  GalleryToolbar,
  GalleryViewer,
  GalleryViewerClose,
  GalleryViewerContent,
  GalleryViewerGallery,
  GalleryViewerSidebar,
  GalleryViewerSidebarTrigger,
  GalleryViewerTrigger,
  GalleryZoomInControl,
  GalleryZoomOutControl,
} from "@vuzeno/registry/ui/gallery";
import { Image, ImageSource } from "@vuzeno/registry/ui/image";
import { Button } from "@vuzeno/ui/components/button";
import { CarouselContent, CarouselItem } from "@vuzeno/ui/components/carousel";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@vuzeno/ui/components/sidebar";
import { ref } from "vue";

const scale = ref(1);
const initialIndex = ref(0);

const images = [
  "https://cdn.shopify.com/s/files/1/0745/1295/7658/files/IMG-18273962_m_jpeg_1.jpg?v=1760537131",
  "https://www.ghacks.net/wp-content/uploads/2025/10/M5-MacBook-Pro-keyboard.jpg",
  "https://istyle.mk/cdn/shop/files/IMG-18277044_m_jpeg_1.jpg?v=1760537022&width=823",
  "https://www.papita.co/om/wp-content/uploads/sites/22/2025/10/MACBOOKPROM5-3.jpg",
  "https://istyle.mk/cdn/shop/files/IMG-18277042_m_jpeg_1.jpg?v=1760537023&width=823",
  "https://cdn.pdx.stibosystems.com/submitted/assets/23a2f7d5-e63d-3d61-95ee-745b7c0c8dd0/IMG-18277141/IMG-18277141_m_jpeg_1.jpeg?v=1760536763133",
];
</script>

<template>
  <GalleryViewer default-sidebar-open>
    <div class="grid grid-cols-3 gap-2">
      <GalleryViewerTrigger v-for="(src, index) in images" :key="index" class="w-full bg-muted rounded-lg overflow-hidden cursor-pointer" @click="initialIndex = index">
        <Image class="size-full">
          <ImageSource :src="src" alt="Gallery image" class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        </Image>
      </GalleryViewerTrigger>
    </div>

    <GalleryViewerContent :style="{ '--sidebar-width': '20rem', '--sidebar-width-mobile': '20rem' }">
      <GalleryViewerGallery>
        <Gallery
          v-model:zoom-scale="scale"
          :zoom-follow-cursor="true"
          :zoom-max-scale="2"
          :initial-index="initialIndex"
          zoom-on-click
          class="flex flex-col gap-6 h-full"
          v-slot="{ selectedIndex, isZoomed }"
        >
          <GalleryContent class="h-full items-center overflow-visible">
            <GalleryItem v-for="(src, index) in images" :key="index" :item-index="index + 1" class="flex justify-center overflow-visible pointer-events-auto">
              <GalleryImage class="basis-full md:basis-1/2 overflow-visible">
                <GalleryImageSource :src="src" alt="Gallery image" class="w-full h-full object-cover" />
              </GalleryImage>
            </GalleryItem>
          </GalleryContent>

          <GalleryToolbar class="absolute top-0 right-0 flex items-center gap-2">
            <GalleryZoomInControl />
            <GalleryZoomOutControl />
            <GalleryViewerSidebarTrigger />
            <GalleryViewerClose />
          </GalleryToolbar>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-muted text-sm text-muted-foreground rounded-full p-2 overflow-hidden">
            <div 
              v-for="(src, index) in images" 
              :key="index" 
              class="size-2 rounded-full" 
              :class="selectedIndex === index + 1 ? 'bg-primary' : 'bg-primary/30'" 
            />
          </div>

          <GalleryPrevious v-if="!isZoomed" class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2" />
          <GalleryNext v-if="!isZoomed" class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2" />
        </Gallery>
      </GalleryViewerGallery>

      <GalleryViewerSidebar side="right">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem class="px-4 py-4 font-bold text-lg">
              Image Gallery
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent class="px-4">
          <p class="text-sm text-muted-foreground">
            Use the sidebar for metadata, image details, or custom actions. The sidebar can be toggled with the panel button in the toolbar.
          </p>
        </SidebarContent>
      </GalleryViewerSidebar>
    </GalleryViewerContent>
  </GalleryViewer>
</template>
