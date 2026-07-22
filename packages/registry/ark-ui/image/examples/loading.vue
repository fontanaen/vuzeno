<script setup lang="ts">
import { Image } from "@vuzeno/registry/ui/image";
import { Skeleton } from "@vuzeno/ui/components/skeleton";
</script>

<template>
  <Image.Root>
    <Image.Loading as-child>
      <Skeleton class="aspect-video w-72" />
    </Image.Loading>
  </Image.Root>
</template>
