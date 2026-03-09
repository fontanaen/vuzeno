<script setup lang="ts">
import { ImageFallback } from "@vuzeno/registry/ui/image";
import {
  ImageViewerContainer,
  ImageViewerProvider,
  ImageViewerSource,
  ImageViewerZoomInControl,
  ImageViewerZoomMap,
  ImageViewerZoomOutControl,
  ImageViewerZoomReset,
  ImageViewerZoomSlider,
} from "@vuzeno/registry/ui/image-viewer";
</script>

<template>
  <ImageViewerProvider class="flex gap-4" :scale="1" :max-scale="6" :step="2" :reset-on-click-outside="false">
    <ImageViewerContainer class="relative">
      <ImageViewerSource src="https://picsum.photos/id/229/600/400" alt="Zoomable image" />
      <ImageFallback>
        <div class="p-2 text-center text-muted-foreground bg-muted">
          Loading...
        </div>
      </ImageFallback>

      <div class="hidden md:flex p-1 invert bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
        <ImageViewerZoomInControl variant="ghost" />
        <ImageViewerZoomOutControl variant="ghost" />
        <ImageViewerZoomReset variant="ghost" />
      </div>
    </ImageViewerContainer>

    <div class="hidden md:flex flex-col gap-4">
      <ImageViewerZoomSlider orientation="vertical" />
      <ImageViewerZoomMap />
    </div>
  </ImageViewerProvider>
</template>
