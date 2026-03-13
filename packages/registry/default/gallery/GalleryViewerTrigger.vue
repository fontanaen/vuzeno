<script setup lang="ts">
import { type DialogTriggerProps, Primitive } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const props = defineProps<DialogTriggerProps & { value?: number; class?: HTMLAttributes["class"] }>();

const { open, selectedIndex, setSelectedIndex } = injectGalleryViewerContext();

const forwardedProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

function handleClick() {
  if (props.value === undefined) {
    return;
  }

  setSelectedIndex(props.value);

  document.startViewTransition(async () => {
    open.value = true;
    await new Promise((resolve) => setTimeout(resolve, 100));
  });
}
</script>

<template>  
  <Primitive 
    v-bind="forwardedProps" 
    :class="cn(open === false && selectedIndex === value && 'gallery-viewer-trigger' , props.class)"
    aria-haspopup="dialog"
    :aria-expanded="open || false"
    :data-state="open ? 'open' : 'closed'"
    @click="handleClick" 
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.gallery-viewer-trigger {
  view-transition-name: gallery-viewer-item;
}
</style>