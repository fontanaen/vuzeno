<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import type { PrimitiveProps } from "reka-ui";
import { onMounted, useTemplateRef, type HTMLAttributes } from "vue";
import Image from "./Image.vue";
import { injectImageZoomProviderContext } from "./ImageZoomProvider.vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & PrimitiveProps
  >(),
  {
    as: "div",
    asChild: false,
  },
);

const { zoomContainerRef } = injectImageZoomProviderContext();

const imageRef = useTemplateRef<typeof Image>("zoomContainerRef");

onMounted(() => {
  zoomContainerRef.value = imageRef.value?.$el;
});
</script>

<template>
  <Image ref="zoomContainerRef" data-slot="image-zoom-container" :class="cn('overflow-hidden relative w-fit', props.class)">
    <slot />
  </Image>
</template>