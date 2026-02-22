<script setup lang="ts">
import { Image, ImageError, ImageLoading, ImageSource } from "@vuzeno/registry/ui/image";
import { Button } from "@vuzeno/ui/components/button";
import { ref } from "vue";

const validLink = "https://picsum.photos/id/229/600/400";
const errorLink = "https://picsum.photos/id/xxxxx/600/400";

const currentLink = ref(validLink);

function handleLoadImage() {
  currentLink.value = validLink;
}

function handleLoadError() {
  currentLink.value = errorLink;
}
</script>
    
<template>
  <div class="flex flex-col items-center gap-4">
    <Image>
      <ImageSource :src="currentLink" alt="..." />

      <ImageLoading>
        <div class="p-2 text-center text-muted-foreground bg-muted">
          Loading...
        </div>
      </ImageLoading>

      <ImageError>
        <div class="p-2 text-center text-destructive-foreground bg-destructive">
          An error occurred while loading the image.
        </div>
      </ImageError>
    </Image>

    <div class="flex justify-center gap-2">
      <Button variant="outline" @click="handleLoadImage">Load image</Button>
      <Button variant="outline" @click="handleLoadError">Load error</Button>
    </div>
  </div>
</template>