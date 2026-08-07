<script setup lang="ts">
import { type PolymorphicProps } from "@ark-ui/vue";
import { Image } from "@vuzeno/registry/ui/image";
import { cn } from "cnfast";
import { type HTMLAttributes, onMounted, useTemplateRef } from "vue";
import { injectImageViewerProviderContext } from "./ImageViewerProvider.vue";
import { useTouchZoom } from "./utils";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PolymorphicProps
  >(),
  {
    asChild: false,
  },
);

const { scale, maxScale, zoomContainerRef, zoomTranslate, isTouching } = injectImageViewerProviderContext();

const imageRef = useTemplateRef<InstanceType<typeof Image.Root>>("zoomContainerRef");

const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchZoom({
  scale,
  maxScale,
  zoomContainerRef() {
    return imageRef.value?.$el;
  },
  zoomTranslate,
  isTouching,
  enabled: true,
});

onMounted(() => {
  zoomContainerRef.value = imageRef.value?.$el;
});
</script>

<template>
  <Image.Root
    ref="zoomContainerRef"
    data-slot="image-zoom-container"
    :class="cn('relative w-fit overflow-hidden', props.class)"
    @wheel.stop.prevent
    @touchmove="handleTouchMove"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot />
  </Image.Root>
</template>