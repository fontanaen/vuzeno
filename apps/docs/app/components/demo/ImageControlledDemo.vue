<script setup lang="ts">
import { Image, type ImageState } from "@vuzeno/registry/ui/image";
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
import { Skeleton } from "@vuzeno/ui/components/skeleton";
import { ref } from "vue";

const states: ImageState[] = ["loading", "error", "success"];
const state = ref<ImageState>("loading");
</script>

<template>
  <div class="flex flex-col gap-4">
    <SegmentGroup.Root v-model="state">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item v-for="item in states" :key="item" :value="item">
        <SegmentGroup.ItemText>{{ item }}</SegmentGroup.ItemText>
        <SegmentGroup.ItemControl />
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>

    <Image.Root v-model:state="state">
      <Image.Source
        class="aspect-video w-72 rounded-md object-cover"
        src="https://picsum.photos/id/229/600/400"
        alt="Landscape"
      />

      <Image.Loading as-child>
        <Skeleton class="aspect-video w-72" />
      </Image.Loading>

      <Image.Error as-child>
        <div class="flex aspect-video w-72 items-center justify-center rounded-md bg-destructive/10 text-sm text-destructive">
          Failed to load image.
        </div>
      </Image.Error>
    </Image.Root>

    <p class="text-sm text-muted-foreground">
      State: {{ state }}
    </p>
  </div>
</template>
