<script setup lang="ts">
import { Drawer } from "@ark-ui/vue/drawer";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { SIDEBAR_WIDTH_MOBILE, type SidebarSide } from "./context";

const props = defineProps<{
  open: boolean;
  side: SidebarSide;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<(e: "update:open", open: boolean) => void>();
</script>

<template>
  <Drawer.Root
    :open="open"
    :swipe-direction="side === 'left' ? 'start' : 'end'"
    @open-change="(details) => emits('update:open', details.open)"
  >
    <Drawer.Backdrop
      class="fixed inset-0 z-50 bg-black/50 md:hidden"
      data-slot="sidebar-mobile-backdrop"
    />
    <Drawer.Positioner
      :class="cn(
        'fixed inset-0 z-50 md:hidden',
        side === 'left' ? 'flex items-stretch justify-start' : 'flex items-stretch justify-end',
      )"
      data-slot="sidebar-mobile-positioner"
    >
      <Drawer.Content
        :class="cn(
          'relative flex h-full w-(--sidebar-width) max-w-none flex-col bg-sidebar p-0 text-sidebar-foreground outline-none',
          'transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
          props.class,
        )"
        :style="{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE }"
        data-sidebar="sidebar"
        data-mobile="true"
        data-slot="sidebar"
      >
        <div class="flex h-full w-full flex-col">
          <slot />
        </div>
      </Drawer.Content>
    </Drawer.Positioner>
  </Drawer.Root>
</template>

<style scoped>
[data-part="content"][data-state="open"] {
  animation: sidebar-mobile-in 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

[data-part="content"][data-state="closed"] {
  animation: sidebar-mobile-out 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-slot="sidebar-mobile-backdrop"][data-state="open"] {
  animation: sidebar-backdrop-in 0.3s ease-out;
}

[data-slot="sidebar-mobile-backdrop"][data-state="closed"] {
  animation: sidebar-backdrop-out 0.2s ease-in;
}

@keyframes sidebar-mobile-in {
  from {
    transform: translate3d(var(--sidebar-slide-from, -100%), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes sidebar-mobile-out {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(var(--sidebar-slide-from, -100%), 0, 0);
  }
}

@keyframes sidebar-backdrop-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes sidebar-backdrop-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
