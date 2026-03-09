<script setup lang="ts">
import { PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { injectGalleryViewerContext } from "./GalleryViewer.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { sidebarOpen, toggleSidebar } = injectGalleryViewerContext();
const { isMobile, openMobile, setOpenMobile } = useSidebar();
</script>

<template>
  <Button 
    data-sidebar="trigger" 
    data-slot="sidebar-trigger" 
    variant="ghost" 
    size="icon"
    :class="cn('size-7', props.class)" 
    @click="() => {
      toggleSidebar();
      if (isMobile) {
        setOpenMobile(!openMobile);
      }
    }"
  >
    <slot>
      <PanelRightCloseIcon v-if="sidebarOpen" />
      <PanelRightOpenIcon v-else />
    </slot>
  </Button>
</template>