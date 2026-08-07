<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { Menu } from "@vuzeno/registry/ui/menu";
import { computed, ref } from "vue";
import { injectSidebarContext, type SidebarInstanceContext } from "./context";
import { provideSidebarMenuSubContext } from "./menusub-context";
import SidebarMenuItem from "./SidebarMenuItem.vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    defaultOpen?: boolean;
  }>(),
  {
    defaultOpen: false,
  },
);

const sidebar = injectSidebarContext(undefined as unknown as SidebarInstanceContext);
const menuOpen = ref(false);
const isHoveringTrigger = ref(false);
const isHoveringContent = ref(false);
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const mode = computed(() => {
  if (!sidebar.isMobile.value && sidebar.state.value === "collapsed" && sidebar.collapsible === "icon") {
    return "flyout" as const;
  }

  return "inline" as const;
});

function cancelClose() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function onTriggerEnter() {
  cancelClose();
  isHoveringTrigger.value = true;
  menuOpen.value = true;
}

function onTriggerLeave() {
  isHoveringTrigger.value = false;
  scheduleClose();
}

function onContentEnter() {
  cancelClose();
  isHoveringContent.value = true;
  menuOpen.value = true;
}

function onContentLeave() {
  isHoveringContent.value = false;
  scheduleClose();
}

function scheduleClose() {
  cancelClose();
  closeTimer = setTimeout(() => {
    if (!isHoveringTrigger.value && !isHoveringContent.value) {
      menuOpen.value = false;
    }
  }, 300);
}

function onMenuOpenChange(details: { open: boolean }) {
  if (details.open) {
    menuOpen.value = true;
  }
}

const flyoutPlacement = computed(() => (sidebar.side === "left" ? "right-start" : "left-start"));

provideSidebarMenuSubContext({
  mode,
  label: props.label,
  menuOpen,
  onTriggerEnter,
  onTriggerLeave,
  onContentEnter,
  onContentLeave,
  side: computed(() => sidebar.side),
});
</script>

<template>
  <SidebarMenuItem>
    <Collapsible.Root
      v-if="mode === 'inline'"
      :default-open="defaultOpen"
      class="group/collapsible w-full min-w-0"
    >
      <slot />
    </Collapsible.Root>

    <Menu.Root
      v-else
      :open="menuOpen"
      :positioning="{ placement: flyoutPlacement, gutter: 12 }"
      @open-change="onMenuOpenChange"
    >
      <div
        class="relative w-full"
        @pointerenter="onTriggerEnter"
        @pointerleave="onTriggerLeave"
      >
        <slot />
      </div>
    </Menu.Root>
  </SidebarMenuItem>
</template>
