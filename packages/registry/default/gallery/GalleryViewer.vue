<script lang="ts">
export type GalleryViewerProps = {
  open?: boolean;
  defaultOpen?: boolean;
  sidebarOpen?: boolean;
  defaultSidebarOpen?: boolean;
};

export type GalleryViewerContext<P extends GalleryViewerProps> = {
  open: Ref<NonNullable<P["open"]>>;
  sidebarOpen: Ref<NonNullable<P["sidebarOpen"]>>;
  toggleSidebar: () => void;
};

export const [injectGalleryViewerContext, provideGalleryViewerContext] = createContext<GalleryViewerContext<GalleryViewerProps>>("GalleryViewer");
</script>

<script setup lang="ts">
import { DialogRoot, createContext } from "reka-ui";
import type { Ref } from "vue";

const props = withDefaults(defineProps<GalleryViewerProps>(), {
  defaultOpen: false,
});

const open = defineModel<boolean>("open", { default: false });
const sidebarOpen = defineModel<boolean>("sidebarOpen", { default: undefined });

console.log(sidebarOpen.value, props); 
if (sidebarOpen.value === undefined) {
  sidebarOpen.value = props.defaultSidebarOpen ?? false;
}

provideGalleryViewerContext({
  open,
  sidebarOpen: sidebarOpen as Ref<boolean>,
  toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
  },
});
</script>

<template>
  <DialogRoot v-model:open="open" :default-open="props.defaultOpen">
    <slot :close="() => open = false" />
  </DialogRoot>
</template>