<script setup lang="ts">
import { Button } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import { XIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { open } = injectGalleryViewerContext();
</script>

<template>
  <Button variant="ghost" size="icon-sm" :class="cn('size-7', props.class)" @click="open = false">
    <slot>
      <XIcon />
    </slot>
  </Button>
</template>