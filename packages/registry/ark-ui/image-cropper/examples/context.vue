<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ZoomIn, ZoomOut } from "lucide-vue-next";
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <ImageCropper.Root>
      <ImageCropper.Context v-slot="context">
        <div class="flex items-center gap-2">
          <Button variant="outline" size="icon" @click="context.zoomBy(-0.1)">
            <ZoomOut />
          </Button>
          <span class="min-w-12 px-2 text-center text-sm">{{ context.zoom.toFixed(1) }}x</span>
          <Button variant="outline" size="icon" @click="context.zoomBy(0.1)">
            <ZoomIn />
          </Button>
        </div>
      </ImageCropper.Context>

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
