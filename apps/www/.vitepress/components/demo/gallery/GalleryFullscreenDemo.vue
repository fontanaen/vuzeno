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
import { Image, ImageLoading, ImageSource } from "@vuzeno/registry/ui/image";
import { SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@vuzeno/ui/components/sidebar";
import { ref } from "vue";

const scale = ref(1);
const open = ref(false);

const images = Array.from({ length: 9 }, (_, index) => `https://picsum.photos/id/${index}/2000/2400`);
</script>

<template>
  <GalleryViewer 
    v-model:open="open" 
    default-sidebar-open
  >
    <div class="grid grid-cols-3 gap-2">
      <GalleryViewerTrigger v-for="(src, index) in images" :key="index" :value="index" class="w-40 bg-muted rounded-lg overflow-hidden cursor-pointer" as-child>
        <Image>
          <ImageSource :src="src" alt="Gallery image" class="w-full aspect-square object-cover hover:scale-110 transition-transform duration-300 animate-in fade-in" />
          <ImageLoading as-child>
            <div class="w-full aspect-square bg-muted animate-in fade-in" />
          </ImageLoading>
        </Image>
      </GalleryViewerTrigger>
    </div>

    <GalleryViewerContent :style="{ '--sidebar-width': '20rem', '--sidebar-width-mobile': '20rem' }">
      <GalleryViewerGallery
        v-model:zoom-scale="scale"
        :zoom-follow-cursor="true"
        :zoom-max-scale="2"
        zoom-on-click
        v-slot="{ selectedIndex, isZoomed }"
      >
          <GalleryContent class="h-full items-center overflow-visible">
            <GalleryItem v-for="(src, index) in images" :key="index" :item-index="index" class="flex justify-center overflow-visible pointer-events-auto">
              <GalleryImage class="basis-full md:basis-1/2 overflow-visible">
                <GalleryImageSource :style="{ viewTransitionName: open && selectedIndex === index ? 'gallery-viewer-item' : 'none' }" :src="src" alt="Gallery image" class="w-full h-full object-cover" />
              </GalleryImage>
            </GalleryItem>
          </GalleryContent>

          <GalleryToolbar class="absolute top-0 right-0 flex items-center gap-2">
            <GalleryZoomInControl class="text-white" />
            <GalleryZoomOutControl class="text-white" />
            <GalleryViewerSidebarTrigger class="text-white" />
            <GalleryViewerClose class="text-white" />
          </GalleryToolbar>

          <div class="absolute shadow bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-muted text-sm text-muted-foreground rounded-full p-2 overflow-hidden">
            <div 
              v-for="(src, index) in images" 
              :key="index" 
              class="size-2 rounded-full" 
              :class="selectedIndex === index + 1 ? 'bg-primary' : 'bg-primary/30'" 
            />
          </div>

          <GalleryPrevious v-if="!isZoomed" class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2" />
          <GalleryNext v-if="!isZoomed" class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2" />
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