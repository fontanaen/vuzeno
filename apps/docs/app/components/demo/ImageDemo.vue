<script setup lang="ts">
import { Image, ImageError, ImageLoading, ImageSource } from "@vuzeno/registry/ui/image";
</script>
    
<template>
  <Image>
    <ImageSource class="w-72 aspect-video" src="https://picsum.photos/id/229/600/400" alt="..." />

    <ImageLoading as-child>
      <div class="w-72 aspect-video p-2 text-center text-muted-foreground bg-muted">
        Loading...
      </div>
    </ImageLoading>

    <ImageError>
      <div class="p-2 text-center text-destructive-foreground bg-destructive">
        An error occurred while loading the image.
      </div>
    </ImageError>
  </Image>
</template>