<script setup lang="ts">
import { FlipHorizontal, FlipVertical } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { ref } from "vue";

const flip = ref({ horizontal: false, vertical: false });
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button
        :variant="flip.horizontal ? 'default' : 'outline'"
        size="sm"
        @click="flip = { ...flip, horizontal: !flip.horizontal }"
      >
        <FlipHorizontal />
        Horizontal
      </Button>
      <Button
        :variant="flip.vertical ? 'default' : 'outline'"
        size="sm"
        @click="flip = { ...flip, vertical: !flip.vertical }"
      >
        <FlipVertical />
        Vertical
      </Button>
    </div>

    <ImageCropper.Root :flip="flip" @flip-change="(event) => (flip = event.flip)">
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
