<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
import { cn } from "cnfast";
import { type HTMLAttributes, reactive } from "vue";
import { provideSidebarProviderContext, type SidebarInstanceContext } from "./context";

const props = withDefaults(
  defineProps<{
    fullHeight?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    fullHeight: false,
  },
);

const sidebars = reactive(new Map<string, SidebarInstanceContext>());

function register(context: SidebarInstanceContext) {
  sidebars.set(context.id, context);
}

function unregister(id: string) {
  sidebars.delete(id);
}

function getSidebar(id: string) {
  return sidebars.get(id) as SidebarInstanceContext | undefined;
}

function getFirstSidebar() {
  return sidebars.values().next().value as SidebarInstanceContext | undefined;
}

provideSidebarProviderContext({
  register,
  unregister,
  getSidebar,
  getFirstSidebar,
});
</script>

<template>
  <Tooltip.Root>
    <div
      data-slot="sidebar-wrapper"
      :class="cn(
        'flex h-full min-h-0 w-full has-data-[variant=inset]:bg-sidebar',
        fullHeight && 'min-h-svh',
        props.class,
      )"
    >
      <slot />
    </div>
  </Tooltip.Root>
</template>
