<script setup lang="ts">
import { Crop } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper, useImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ref } from "vue";

const imageCropper = useImageCropper();
const preview = ref<string | null>(null);

async function handleCrop() {
  const result = await imageCropper.value.getCroppedImage({ output: "dataUrl" });
  if (typeof result === "string") {
    preview.value = result;
  }
}
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex items-center gap-2">
      <Button @click="handleCrop">
        <Crop />
        Crop Image
      </Button>
    </div>

    <ImageCropper.RootProvider :value="imageCropper">
      <ImageCropper.Viewport>
        <ImageCropper.Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
          alt="Sample"
          crossorigin="anonymous"
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

    <div class="flex flex-col gap-2 rounded-lg border border-border bg-muted p-4">
      <span class="text-xs font-medium tracking-wide text-foreground uppercase">Preview</span>
      <img
        v-if="preview"
        :src="preview"
        alt="Cropped preview"
        class="max-h-[120px] max-w-[120px] rounded object-contain"
      >
    </div>
  </div>
</template>
