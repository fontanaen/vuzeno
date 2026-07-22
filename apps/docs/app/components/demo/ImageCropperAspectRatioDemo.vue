<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { ImageCropper } from "@vuzeno/registry/ui/image-cropper";
import { RectangleHorizontal, RectangleVertical, Square } from "lucide-vue-next";
import { markRaw, ref } from "vue";

const aspects = [
  { label: "16:9", value: 16 / 9, icon: markRaw(RectangleHorizontal) },
  { label: "1:1", value: 1, icon: markRaw(Square) },
  { label: "9:16", value: 9 / 16, icon: markRaw(RectangleVertical) },
];

const aspectRatio = ref(16 / 9);
</script>

<template>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button
        v-for="aspect in aspects"
        :key="aspect.label"
        :variant="aspectRatio === aspect.value ? 'default' : 'outline'"
        size="sm"
        @click="aspectRatio = aspect.value"
      >
        <component :is="aspect.icon" />
        {{ aspect.label }}
      </Button>
    </div>

    <ImageCropper.Root :aspect-ratio="aspectRatio">
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
