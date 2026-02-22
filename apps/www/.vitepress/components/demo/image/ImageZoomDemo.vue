<script setup lang="ts">
import { ImageFallback, ImageZoomContainer, ImageZoomInControl, ImageZoomOutControl, ImageZoomProvider, ImageZoomReset, ImageZoomSlider, ImageZoomSource } from "@vuzeno/registry/ui/image";
</script>

<template>
  <ImageZoomProvider class="flex gap-4" :scale="1" :max-scale="6" :step="2" :reset-on-click-outside="false">
    <ImageZoomContainer>
      <ImageZoomSource src="https://picsum.photos/id/229/600/400" alt="..." />
      <ImageFallback>
        <div class="p-2 text-center text-muted-foreground bg-muted">
          Loading...
        </div>
      </ImageFallback>

      <div class="hidden md:flex p-1 invert bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
        <ImageZoomInControl variant="ghost" />
        <ImageZoomOutControl variant="ghost" />
        <ImageZoomReset variant="ghost" />
      </div>
    </ImageZoomContainer>
    
    <div class="hidden md:block">
      <ImageZoomSlider orientation="vertical" />
    </div>
  </ImageZoomProvider>
</template>