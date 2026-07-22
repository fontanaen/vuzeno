<script setup lang="ts">
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <ImageCropper.Root crop-shape="circle">
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
