<script setup lang="ts">
import { Image } from "@vuzeno/registry/ui/image";
import { Skeleton } from "@vuzeno/registry/ui/skeleton";
</script>

<template>
  <Image.Root state="loading">
    <Image.Loading>
      <Skeleton class="aspect-video w-72" />
    </Image.Loading>
  </Image.Root>
</template>
