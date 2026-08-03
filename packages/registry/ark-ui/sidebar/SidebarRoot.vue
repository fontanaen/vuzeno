<script setup lang="ts">
import { useEventListener, useMediaQuery } from "@vueuse/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onBeforeMount, onBeforeUnmount, ref } from "vue";
import {
  injectSidebarProviderContext,
  provideSidebarContext,
  readSidebarCookie,
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  type SidebarCollapsible,
  type SidebarInstanceContext,
  type SidebarSide,
  type SidebarVariant,
  writeSidebarCookie,
} from "./context";
import SidebarMobileDrawer from "./SidebarMobileDrawer.vue";

const open = defineModel<boolean>("open", { default: true });

const props = withDefaults(
  defineProps<{
    id?: string;
    side?: SidebarSide;
    variant?: SidebarVariant;
    collapsible?: SidebarCollapsible;
    defaultOpen?: boolean;
    shortcut?: string | false;
    persist?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    id: "sidebar",
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
    defaultOpen: true,
    persist: true,
    shortcut: SIDEBAR_KEYBOARD_SHORTCUT,
  },
);

const provider = injectSidebarProviderContext();
const isMobile = useMediaQuery("(max-width: 768px)");
const openMobile = ref(false);
const sidebarId = computed(() => props.id ?? props.side);

onBeforeMount(() => {
  if (props.defaultOpen !== undefined) {
    open.value = props.defaultOpen;
    return;
  }

  if (props.persist) {
    open.value = readSidebarCookie(sidebarId.value, true);
  }
});

const state = computed(() => (open.value ? "expanded" : "collapsed"));

function setOpen(value: boolean) {
  open.value = value;

  if (props.persist) {
    writeSidebarCookie(sidebarId.value, value);
  }
}

function setOpenMobile(value: boolean) {
  openMobile.value = value;
}

function toggleSidebar() {
  if (isMobile.value) {
    setOpenMobile(!openMobile.value);
    return;
  }

  setOpen(!open.value);
}

const sidebarContext: SidebarInstanceContext = {
  id: sidebarId.value,
  state,
  open,
  setOpen,
  isMobile,
  openMobile,
  setOpenMobile,
  toggleSidebar,
  side: props.side,
  variant: props.variant,
  collapsible: props.collapsible,
};

provideSidebarContext(sidebarContext);
provider.register(sidebarContext);

onBeforeUnmount(() => {
  provider.unregister(sidebarId.value);
});

if (props.shortcut) {
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === props.shortcut && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      toggleSidebar();
    }
  });
}

const cssVars = {
  "--sidebar-width": SIDEBAR_WIDTH,
  "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
};

const desktopWidthClass = computed(() => {
  if (props.collapsible === "none") {
    return "w-(--sidebar-width)";
  }

  if (state.value === "expanded") {
    return "w-(--sidebar-width)";
  }

  if (props.collapsible === "offcanvas") {
    return "w-0 overflow-hidden";
  }

  if (props.variant === "floating" || props.variant === "inset") {
    return "w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]";
  }

  return "w-(--sidebar-width-icon)";
});

const innerPanelClass = computed(() => {
  const visualClass = cn(
    "bg-sidebar flex h-full min-w-0 flex-col",
    props.variant === "floating" && "rounded-lg border border-sidebar-border shadow-sm",
    props.variant === "sidebar" && props.side === "left" && "border-r border-sidebar-border",
    props.variant === "sidebar" && props.side === "right" && "border-l border-sidebar-border",
  );

  if (props.collapsible === "offcanvas") {
    return cn(
      visualClass,
      "sidebar-panel-slide absolute inset-y-0 z-10 w-(--sidebar-width) duration-200 ease-linear",
      props.side === "left" ? "left-0" : "right-0",
      (props.variant === "floating" || props.variant === "inset") && "p-2",
    );
  }

  return cn(visualClass, "w-full");
});

const containerClass = computed(() =>
  cn(
    "group peer h-full shrink-0 self-stretch text-sidebar-foreground transition-[width] duration-200 ease-linear",
    props.collapsible !== "none" && "hidden md:flex md:flex-col",
    props.collapsible === "offcanvas" && "relative overflow-hidden",
    desktopWidthClass.value,
    (props.variant === "floating" || props.variant === "inset") && props.collapsible === "icon" && "p-2",
    props.class,
  ),
);
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    data-slot="sidebar"
    data-sidebar="sidebar"
    :data-side="side"
    :data-variant="variant"
    :data-state="state"
    :style="cssVars"
    :class="cn(
      'bg-sidebar text-sidebar-foreground flex h-full shrink-0 self-stretch flex-col',
      'w-(--sidebar-width)',
      props.class,
    )"
  >
    <slot />
  </div>

  <SidebarMobileDrawer
    v-else-if="isMobile"
    :open="openMobile"
    :side="side"
    @update:open="setOpenMobile"
  >
    <slot />
  </SidebarMobileDrawer>

  <div
    v-else
    data-slot="sidebar"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-offcanvas="collapsible === 'offcanvas' ? '' : undefined"
    :data-variant="variant"
    :data-side="side"
    :style="cssVars"
    :class="containerClass"
  >
    <div
      data-sidebar="sidebar"
      :class="innerPanelClass"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sidebar-panel-slide {
  transform: translate3d(0, 0, 0);
}

[data-slot="sidebar"][data-offcanvas][data-side="left"][data-state="collapsed"] .sidebar-panel-slide {
  transform: translate3d(-100%, 0, 0);
}

[data-slot="sidebar"][data-offcanvas][data-side="right"][data-state="collapsed"] .sidebar-panel-slide {
  transform: translate3d(100%, 0, 0);
}
</style>
