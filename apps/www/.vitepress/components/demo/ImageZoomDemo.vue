<script setup lang="ts">
import { ImageZoomContainer, ImageZoomFallback, ImageZoomInControl, ImageZoomOutControl, ImageZoomProvider, ImageZoomReset, ImageZoomSlider, ImageZoomSource } from "@vuetella/registry/ui/image";
</script>

<template>
    <ImageZoomProvider class="flex gap-4" :scale="1" :step="1">
        <ImageZoomContainer>
            <ImageZoomSource src="https://picsum.photos/id/229/600/400" alt="..." />
            <ImageZoomFallback>
            <!-- Loading/error content -->
            </ImageZoomFallback>

            <div class="flex p-1 invert bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
                <ImageZoomInControl variant="ghost" />
                <ImageZoomOutControl variant="ghost" />
                <ImageZoomReset variant="ghost" />
            </div>
        </ImageZoomContainer>
        <div>
            <ImageZoomSlider orientation="vertical" />
        </div>
    </ImageZoomProvider>
</template>