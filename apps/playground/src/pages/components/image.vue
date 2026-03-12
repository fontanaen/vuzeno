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
import { Button } from "@vuzeno/ui/components/button";
import { Field, FieldGroup, FieldLabel } from "@vuzeno/ui/components/field";
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@vuzeno/ui/components/sidebar";
import { XIcon } from "lucide-vue-next";
import { ref } from "vue";

definePage({
  name: "components.image",
});

const open = ref(false);
const scale = ref(1);

const links = [
  "https://m.media-amazon.com/images/I/61aF2GnTTRL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61TNjaqjYWL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61RBJfWYxKL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/81UewqlZEkL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61nm75TAf3L._AC_SX679_.jpg",
];
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Image</h1>

    <div class="space-y-4">
      <h2 class="text-xl font-bold">Example</h2>

      <div class="flex flex-col gap-24">
        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-bold">Image + Zoom + Carousel</h3>

          <GalleryViewer v-model:open="open">
            <GalleryViewerTrigger>
              <Button>
                Open Sidebar
              </Button>
            </GalleryViewerTrigger>

            <GalleryViewerContent :style="{ '--sidebar-width': '24rem', '--sidebar-width-mobile': '24rem' }">
              <GalleryViewerGallery>       
                <Gallery 
                  v-model:zoom-scale="scale" 
                  :zoom-follow-cursor="true"
                  :zoom-max-scale="2"
                  zoom-on-click
                  class="flex flex-col gap-6 h-full"
                  v-slot="{ selectedIndex, isZoomed }"
                >
                  <GalleryContent class="h-full items-center overflow-visible">
                    <GalleryItem v-for="(link, index) in links" :key="index" :item-index="index + 1" class="flex justify-center overflow-visible pointer-events-auto">
                      <GalleryImage class="basis-full md:basis-1/2 overflow-visible">
                        <GalleryImageSource :src="link" class="w-full h-full object-cover" />
                      </GalleryImage>
                    </GalleryItem>
                  </GalleryContent>

                  <GalleryToolbar class="absolute top-0 right-0 justify-center items-center">                    
                    <GalleryZoomInControl />
                    <GalleryZoomOutControl />

                    <GalleryViewerSidebarTrigger />

                    <GalleryViewerClose />
                  </GalleryToolbar>
                  
                  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm px-2">{{ selectedIndex }} / {{ links.length }}</div>

                  <GalleryPrevious v-if="!isZoomed" class="hidden md:flex" />
                  <GalleryNext v-if="!isZoomed" class="hidden md:flex" />
                </Gallery>
              </GalleryViewerGallery>

              <GalleryViewerSidebar side="right">
                <SidebarHeader>
                  <SidebarMenu>
                    <SidebarMenuItem class="px-2 py-4 font-bold text-xl">
                      Macbook Pro M5 Max - 16"
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                  <FieldGroup class="p-4">
                    <Field>
                      <FieldLabel>Matériel</FieldLabel>
                      <ul class="list-disc list-inside text-sm">           
                        <li>CPU 18 cœurs, GPU 40 cœurs, Neural Engine 16 cœurs</li>
                        <li>48 Go de mémoire unifiée</li>
                        <li>Stockage SSD de 2 To</li>
                        <li>Verre d’écran nano‑texturé</li>
                        <li>Adaptateur secteur non fourni</li>
                        <li>Magic Keyboard Français rétroéclairé avec Touch ID</li>
                        <li>Trois ports Thunderbolt 5, un port MagSafe 3, une prise casque 3,5 mm, un port HDMI, un lecteur de carte SDXC</li>
                        <li>Prise en charge de quatre écrans externes</li>
                        <li>Kit d’accessoires</li>
                      </ul>
                    </Field>
                  </FieldGroup>
                </SidebarContent>
                <SidebarFooter />
                <SidebarRail />
              </GalleryViewerSidebar>
            </GalleryViewerContent>
          </GalleryViewer>

          <GalleryViewer v-if="false" v-slot="{ close }">
            <GalleryViewerSheetTrigger>
              <Button>
                Open Carousel Viewer
              </Button>
            </GalleryViewerSheetTrigger>

            <GalleryViewerContent>
              <GalleryViewerGallery>
                <Gallery 
                  v-model:zoom-scale="scale" 
                  :zoom-follow-cursor="true"
                  :zoom-max-scale="2"
                  zoom-on-click
                  class="flex flex-col gap-6 h-full"
                  v-slot="{ selectedIndex, isZoomed }"
                >
                  <GalleryContent class="h-full items-center overflow-visible">
                    <GalleryItem v-for="(link, index) in links" :key="index" :item-index="index + 1" class="flex justify-center overflow-visible">
                      <GalleryImage class="basis-1/2 overflow-visible">
                        <GalleryImageSource :src="link" class="w-full h-full object-cover" />
                      </GalleryImage>
                    </GalleryItem>
                  </GalleryContent>

                  <GalleryToolbar class="absolute top-5 right-0 justify-center items-center">
                    <span class="text-sm px-2">{{ selectedIndex }} / {{ links.length }}</span>
                    
                    <GalleryZoomInControl />
                    <GalleryZoomOutControl />

                    
                    <Button variant="secondary" size="icon-sm" @click="close">
                      <XIcon />
                    </Button>

                    <GalleryViewerSidebarTrigger />
                  </GalleryToolbar>
                  
                  <GalleryPrevious v-if="!isZoomed" />
                  <GalleryNext v-if="!isZoomed" />
                </Gallery>
              </GalleryViewerGallery>

              <GalleryViewerSidebar>
                Hello
              </GalleryViewerSidebar>
            </GalleryViewerContent>
          </GalleryViewer>
        </div>
      </div>
    </div>
  </div>
</template>