<script setup lang="ts">
import { Gallery, GalleryContent, GalleryImage, GalleryImageSource, GalleryItem, GalleryNext, GalleryPrevious, GalleryToolbar, GalleryZoomInControl, GalleryZoomOutControl } from "@vuzeno/registry/ui/gallery";
import { Button } from "@vuzeno/ui/components/button";
import { Dialog, DialogContent, DialogTrigger } from "@vuzeno/ui/components/dialog";
import { Maximize2Icon, Minimize2Icon } from "lucide-vue-next";
import { ref } from "vue";

const scale = ref(1);
const initialIndex = ref(0);
const isExpanded = ref(false);

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
  <Dialog>
    <DialogTrigger>
      <Button variant="outline">
        Open Gallery
      </Button>
    </DialogTrigger>
    
    <DialogContent class="w-full max-w-3xl overflow-hidden" :class="{ 'max-w-[90vw]': isExpanded }">
      <Gallery
        v-model:zoom-scale="scale"
        :zoom-follow-cursor="true"
        :zoom-max-scale="2"
        :initial-index="initialIndex"
        zoom-on-click
        class="flex flex-col gap-4 h-full"
        v-slot="{ selectedIndex, isZoomed }"
      >
        <GalleryContent class="h-full items-center">
          <GalleryItem v-for="(src, index) in images" :key="index" :item-index="index + 1" class="flex justify-center pointer-events-auto">
            <GalleryImage class="basis-full md:basis-1/2">
              <GalleryImageSource :src="src" alt="Gallery image" class="w-full h-full object-cover" />
            </GalleryImage>
          </GalleryItem>
        </GalleryContent>

        <GalleryToolbar class="flex items-center gap-2 mx-auto">
          <GalleryZoomInControl />
          <GalleryZoomOutControl />
          <Button variant="ghost" size="icon-sm" class="size-7" @click="isExpanded = !isExpanded">
            <Maximize2Icon v-if="!isExpanded" />
            <Minimize2Icon v-else />
          </Button>
        </GalleryToolbar>

        <GalleryPrevious v-if="!isZoomed" class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2" />
        <GalleryNext v-if="!isZoomed" class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2" />
      </Gallery>
    </DialogContent>
  </Dialog>
</template>
