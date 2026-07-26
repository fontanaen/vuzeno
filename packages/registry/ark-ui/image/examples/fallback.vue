<script setup lang="ts">
import { ImageIcon } from "@lucide/vue";
import { Image } from "@vuzeno/registry/ui/image";
import { Skeleton } from "@vuzeno/registry/ui/skeleton";
</script>

<template>
  <Image.Root>
    <Image.Source
      class="aspect-video w-72 rounded-md object-cover"
      src="https://deelay.me/3000/https://picsum.photos/id/237/600/400"
      alt="Dog"
    />

    <Image.Loading>
      <Skeleton class="aspect-video w-72" />
    </Image.Loading>

    <Image.Fallback as-child>
      <div class="flex aspect-video w-72 flex-col items-center justify-center gap-2 rounded-md bg-muted text-muted-foreground">
        <ImageIcon class="size-8 opacity-50" />
        <span class="text-sm">Unavailable</span>
      </div>
    </Image.Fallback>
  </Image.Root>
</template>
