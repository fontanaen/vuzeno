<script setup lang="ts">
import { ZoomIn, ZoomOut } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ref } from "vue";

const zoom = ref(1);
const minZoom = 0.5;
const maxZoom = 2;
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex items-center gap-2">
      <Button variant="outline" size="icon" @click="zoom = Math.max(minZoom, zoom - 0.1)">
        <ZoomOut />
      </Button>
      <span class="min-w-12 px-2 text-center text-sm">{{ zoom.toFixed(1) }}x</span>
      <Button variant="outline" size="icon" @click="zoom = Math.min(maxZoom, zoom + 0.1)">
        <ZoomIn />
      </Button>
    </div>

    <p class="m-0 text-sm text-muted-foreground">
      Zoom constrained between {{ minZoom }}x and {{ maxZoom }}x
    </p>

    <ImageCropper.Root v-model:zoom="zoom" :min-zoom="minZoom" :max-zoom="maxZoom">
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
