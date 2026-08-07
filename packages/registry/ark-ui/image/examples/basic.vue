<script setup lang="ts">
import { Image } from "@vuzeno/registry/ui/image";
import { Skeleton } from "@vuzeno/registry/ui/skeleton";
</script>

<template>
  <Image.Root>
    <Image.Source class="aspect-video w-72" src="https://picsum.photos/id/229/600/400" alt="..." />

    <Image.Loading as-child>
      <Skeleton class="aspect-video w-72" />
    </Image.Loading>

    <Image.Error>
      <div class="bg-destructive p-2 text-center text-destructive-foreground">
        An error occurred while loading the image.
      </div>
    </Image.Error>
  </Image.Root>
</template>
