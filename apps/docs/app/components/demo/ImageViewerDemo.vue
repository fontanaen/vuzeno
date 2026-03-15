<script setup lang="ts">
import { ImageFallback } from "@vuzeno/registry/ui/image";
import { ImageViewerContainer, ImageViewerProvider, ImageViewerSource, ImageViewerZoomInControl, ImageViewerZoomOutControl } from "@vuzeno/registry/ui/image-viewer";
</script>

<template>
  <ImageViewerProvider :scale="1" :max-scale="3" :step="2" :reset-on-click-outside="false">
    <ImageViewerContainer class="relative">
      <ImageViewerSource class="w-96 aspect-video" src="https://picsum.photos/id/229/600/400" alt="Zoomable image" />
      <ImageFallback as-child>
        <div class="w-96 aspect-video p-2 text-center text-muted-foreground bg-muted">
          Loading...
        </div>
      </ImageFallback>

      <div class="hidden md:flex p-1 bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
        <ImageViewerZoomInControl variant="ghost" />
        <ImageViewerZoomOutControl variant="ghost" />
      </div>
    </ImageViewerContainer>
  </ImageViewerProvider>
</template>
