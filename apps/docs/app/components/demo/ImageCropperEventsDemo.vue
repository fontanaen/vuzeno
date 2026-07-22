<script setup lang="ts">
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ref } from "vue";

const cropData = ref({ x: 0, y: 0, width: 0, height: 0 });
const zoom = ref(1);
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <ImageCropper.Root
      @crop-change="(event) => (cropData = event.crop)"
      @zoom-change="(event) => (zoom = event.zoom)"
    >
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

    <div class="flex gap-6 rounded-lg border border-border bg-muted px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-medium tracking-wide text-foreground uppercase">Zoom</span>
        <span class="text-sm font-medium text-foreground tabular-nums">{{ zoom.toFixed(2) }}x</span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-medium tracking-wide text-foreground uppercase">Position</span>
        <span class="text-sm font-medium text-foreground tabular-nums">
          {{ Math.round(cropData.x) }}, {{ Math.round(cropData.y) }}
        </span>
      </div>
      <div class="flex flex-col gap-0.5">
        <span class="text-xs font-medium tracking-wide text-foreground uppercase">Size</span>
        <span class="text-sm font-medium text-foreground tabular-nums">
          {{ Math.round(cropData.width) }} x {{ Math.round(cropData.height) }}
        </span>
      </div>
    </div>
  </div>
</template>
