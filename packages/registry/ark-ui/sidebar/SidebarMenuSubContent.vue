<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { Menu } from "@vuzeno/registry/ui/menu";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { injectSidebarMenuSubContext } from "./menusub-context";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const menuSub = injectSidebarMenuSubContext();
const isInline = computed(() => menuSub.mode.value === "inline");

const flyoutBridgeClass = computed(() => {
  if (menuSub.side.value === "left") {
    return "before:absolute before:inset-y-0 before:-left-6 before:w-6 before:content-['']";
  }

  return "before:absolute before:inset-y-0 before:-right-6 before:w-6 before:content-['']";
});
</script>

<template>
  <Collapsible.Content
    v-if="isInline"
    :class="cn('overflow-hidden', props.class)"
  >
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      :class="cn(
        'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
      )"
    >
      <slot />
    </ul>
  </Collapsible.Content>

  <Menu.Content
    v-else
    :class="cn(
      'relative min-w-48 p-0 text-sidebar-foreground shadow-md',
      props.class,
    )"
  >
    <div
      :class="cn(
        'bg-sidebar rounded-md p-2',
        flyoutBridgeClass,
      )"
      @pointerenter="menuSub.onContentEnter"
      @pointerleave="menuSub.onContentLeave"
    >
      <div
        v-if="menuSub.label"
        class="text-sidebar-foreground/70 px-2 pt-0.5 pb-2 text-xs font-medium"
      >
        {{ menuSub.label }}
      </div>
      <ul class="flex flex-col gap-1">
        <slot />
      </ul>
    </div>
  </Menu.Content>
</template>
