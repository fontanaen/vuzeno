<script setup lang="ts">
import { XIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { open } = injectGalleryViewerContext();

function handleClick() {
  document.startViewTransition(async () => {
    open.value = false;
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}
</script>

<template>
  <Button variant="ghost" size="icon-sm" :class="cn('size-7', props.class)" @click="handleClick">
    <slot>
      <XIcon />
    </slot>
  </Button>
</template>