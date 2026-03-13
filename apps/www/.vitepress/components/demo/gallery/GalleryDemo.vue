<script setup lang="ts">
import { Gallery, GalleryContent, GalleryImage, GalleryImageSource, GalleryItem, GalleryNext, GalleryPrevious } from "@vuzeno/registry/ui/gallery";
import { ref } from "vue";

const scale = ref(1);
const images = ["https://picsum.photos/id/229/600/400", "https://picsum.photos/id/230/600/400", "https://picsum.photos/id/231/600/400"];
</script>

<template>
  <Gallery v-model:zoom-scale="scale" zoom-on-click class="relative w-full max-w-2xl overflow-hidden flex flex-col gap-6" v-slot="{ selectedIndex }">
    <GalleryContent class="h-64 items-center overflow-visible">
      <GalleryItem v-for="(src, index) in images" :key="index" :item-index="index + 1" class="flex justify-center overflow-visible">
        <GalleryImage class="basis-1/2 overflow-visible">
          <GalleryImageSource :src="src" alt="Gallery image" class="w-full h-full object-cover" />
        </GalleryImage>
      </GalleryItem>
    </GalleryContent>

    <div class="mx-auto flex items-center gap-2">
      <GalleryPrevious class="relative translate-0 size-6" variant="secondary" />
      <div class="flex items-center gap-2 bg-muted rounded-full p-2 overflow-hidden">
        <div 
          v-for="(src, index) in images" 
          :key="index" 
          class="size-2 rounded-full" 
          :class="selectedIndex === index ? 'bg-primary' : 'bg-primary/30'" 
        />
      </div>
      <GalleryNext class="relative translate-0 size-6" variant="secondary" />
    </div>
  </Gallery>
</template>
