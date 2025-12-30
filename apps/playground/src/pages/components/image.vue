<script setup lang="ts">
import { Image, ImageSource, ImageFallback, ImageZoomProvider, ImageZoomInControl, ImageZoomOutControl, ImageZoomSource, ImageZoomFallback, ImageZoomReset, ImageZoomContainer, ImageZoomSlider, ImageZoomMap } from '@vuetella/registry/ui/image'

definePage({
  name: 'components.image'
})
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Image</h1>

    <div class="space-y-4">
        <h2 class="text-xl font-bold">Example</h2>

        <div class="grid grid-cols-1 gap-4">
            <h3 class="text-lg font-bold">Basic Image</h3>

            <Image class="w-[600px]">
                <ImageSource src="https://images.pexels.com/photos/34937374/pexels-photo-34937374.jpeg" />
                <ImageFallback>
                    <div class="aspec-3/2 w-96">
                        Hello World
                    </div>
                </ImageFallback>
            </Image>

            <h3 class="text-lg font-bold">Image + Zoom</h3>

            <ImageZoomProvider class="grid grid-cols-2 gap-4" mode="zoom" :scale="1" :step="1">
                <ImageZoomContainer>
                    <ImageZoomSource src="https://images.pexels.com/photos/34937374/pexels-photo-34937374.jpeg" />
                    <ImageZoomFallback>
                        <!-- fallback content -->
                    </ImageZoomFallback>

                    <div class="flex p-1 invert bg-background/75 rounded-lg absolute bottom-2 right-2 pointer-events-auto backdrop-blur-lg">
                        <ImageZoomInControl variant="ghost" />
                        <ImageZoomOutControl variant="ghost" />
                        <ImageZoomReset variant="ghost" />
                    </div>
                </ImageZoomContainer>
                <ImageZoomSlider />
                <ImageZoomMap />
            </ImageZoomProvider>
        </div>
    </div>
  </div>
</template>