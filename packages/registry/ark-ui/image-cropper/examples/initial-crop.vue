<script setup lang="ts">
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <p class="m-0 text-sm text-muted-foreground">
      Starts with a pre-defined crop area
    </p>

    <ImageCropper.Root :initial-crop="{ x: 50, y: 30, width: 200, height: 120 }">
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
    </ImageCropper.Root>
  </div>
</template>
