<script setup lang="ts">
import { RotateCcw, RotateCw } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ref } from "vue";

const rotation = ref(0);
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex items-center gap-2">
      <Button variant="outline" size="icon" @click="rotation -= 90">
        <RotateCcw />
      </Button>
      <Button variant="outline" size="icon" @click="rotation += 90">
        <RotateCw />
      </Button>
      <span class="px-2 text-sm">{{ rotation }}deg</span>
    </div>

    <ImageCropper.Root :rotation="rotation" @rotation-change="(event) => (rotation = event.rotation)">
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
