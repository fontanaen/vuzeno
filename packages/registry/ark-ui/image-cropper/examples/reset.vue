<script setup lang="ts">
import { FlipHorizontal, RefreshCw, RotateCcw, RotateCw, ZoomIn, ZoomOut } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper, useImageCropper } from "@vuzeno/registry/ui/image-cropper";

const imageCropper = useImageCropper();
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button variant="outline" size="icon" @click="imageCropper.zoomBy(-0.1)">
        <ZoomOut />
      </Button>
      <Button variant="outline" size="icon" @click="imageCropper.zoomBy(0.1)">
        <ZoomIn />
      </Button>
      <Button variant="outline" size="icon" @click="imageCropper.rotateBy(-90)">
        <RotateCcw />
      </Button>
      <Button variant="outline" size="icon" @click="imageCropper.rotateBy(90)">
        <RotateCw />
      </Button>
      <Button variant="outline" size="icon" @click="imageCropper.flipHorizontally()">
        <FlipHorizontal />
      </Button>
      <Button variant="secondary" size="sm" @click="imageCropper.reset()">
        <RefreshCw />
        Reset
      </Button>
    </div>

    <ImageCropper.RootProvider :value="imageCropper">
      <ImageCropper.Viewport>
        <ImageCropper.Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
          alt="Sample"
        />
        <ImageCropper.Selection>
          <ImageCropper.Handle
            v-for="position in ImageCropper.handles"
            :key="position"
            :position="position"
          >
            <div />
          </ImageCropper.Handle>
          <ImageCropper.Grid axis="horizontal" />
          <ImageCropper.Grid axis="vertical" />
        </ImageCropper.Selection>
      </ImageCropper.Viewport>
    </ImageCropper.RootProvider>
  </div>
</template>
