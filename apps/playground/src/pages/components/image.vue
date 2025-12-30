<script setup lang="ts">
import { Image, ImageSource, ImageFallback, ImageZoomProvider, ImageZoomInControl, ImageZoomOutControl, ImageZoomSource, ImageZoomFallback, ImageZoomReset, ImageZoomContainer, ImageZoomSlider, ImageZoomMap } from '@vuetella/registry/ui/image'

definePage({
  name: 'components.image'
})
</script>

<template>
  <div class="space-y-12">
    <h1 class="text-3xl font-bold">Image</h1>

    <div class="space-y-4">
        <h2 class="text-lg font-bold">Example</h2>

        <div class="grid grid-cols-1 gap-4">
            <h3 class="text-lg font-bold">Basic Image</h3>
            <h3 class="text-lg font-bold">Image with Zoom</h3>

            <Image>
                <ImageSource src="https://images.pexels.com/photos/34937374/pexels-photo-34937374.jpeg" />
                <ImageFallback>
                    Hello World
                </ImageFallback>
            </Image>            

            <ImageZoomProvider mode="zoom" :scale="1" :step="1">
                <div class="grid grid-cols-2 gap-4">
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
                </div>
            </ImageZoomProvider>
        </div>
    </div>
  </div>
</template>