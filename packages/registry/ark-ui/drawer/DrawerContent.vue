<script setup lang="ts">
import { Drawer, type DrawerContentProps } from "@ark-ui/vue/drawer";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DrawerContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Teleport to="body">
    <Drawer.Backdrop
      class="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-drawer-fade-in data-[state=closed]:animate-drawer-fade-out"
      data-slot="drawer-backdrop"
    />
    <Drawer.Positioner
      :class="cn(
        'fixed inset-0 z-50 flex items-end justify-center',
        'data-[swipe-direction=up]:items-start',
        'data-[swipe-direction=left]:items-stretch data-[swipe-direction=left]:justify-start',
        'data-[swipe-direction=right]:items-stretch data-[swipe-direction=right]:justify-end',
      )"
      data-slot="drawer-positioner"
    >
      <Drawer.Content
        v-bind="contentProps"
        :class="cn(
          '[--bleed:3rem]',
          'relative flex h-full w-full max-h-[96svh] flex-col px-5 outline-none',
          'rounded-t-2xl bg-popover shadow-xl',
          'transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
          'after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-(--bleed) after:bg-inherit after:content-[\'\']',
          'data-[state=open]:animate-drawer-slide-in-bottom data-[state=closed]:animate-drawer-slide-out-bottom',
          'data-[swipe-direction=up]:rounded-t-none data-[swipe-direction=up]:rounded-b-2xl',
          'data-[swipe-direction=up]:after:top-auto data-[swipe-direction=up]:after:bottom-full',
          'data-[swipe-direction=up]:data-[state=open]:animate-drawer-slide-in-top data-[swipe-direction=up]:data-[state=closed]:animate-drawer-slide-out-top',
          'data-[swipe-direction=left]:max-h-none data-[swipe-direction=left]:max-w-100',
          'data-[swipe-direction=left]:rounded-l-none data-[swipe-direction=left]:rounded-r-2xl',
          'data-[swipe-direction=left]:after:inset-x-auto data-[swipe-direction=left]:after:inset-y-0',
          'data-[swipe-direction=left]:after:top-0 data-[swipe-direction=left]:after:right-full',
          'data-[swipe-direction=left]:after:h-auto data-[swipe-direction=left]:after:w-(--bleed)',
          'data-[swipe-direction=left]:data-[state=open]:animate-drawer-slide-in-left data-[swipe-direction=left]:data-[state=closed]:animate-drawer-slide-out-left',
          'data-[swipe-direction=right]:max-h-none data-[swipe-direction=right]:max-w-100',
          'data-[swipe-direction=right]:rounded-r-none data-[swipe-direction=right]:rounded-l-2xl',
          'data-[swipe-direction=right]:after:inset-x-auto data-[swipe-direction=right]:after:inset-y-0',
          'data-[swipe-direction=right]:after:top-0 data-[swipe-direction=right]:after:left-full',
          'data-[swipe-direction=right]:after:h-auto data-[swipe-direction=right]:after:w-(--bleed)',
          'data-[swipe-direction=right]:data-[state=open]:animate-drawer-slide-in-right data-[swipe-direction=right]:data-[state=closed]:animate-drawer-slide-out-right',
          props.class,
        )"
        data-slot="drawer-content"
      >
        <slot />
      </Drawer.Content>
    </Drawer.Positioner>
  </Teleport>
</template>
