import { createContext } from "@ark-ui/vue";
import { type ComputedRef, computed, type MaybeRefOrGetter, type Ref, toValue } from "vue";

export const SIDEBAR_COOKIE_NAME = "sidebar_state";
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const SIDEBAR_WIDTH = "16rem";
export const SIDEBAR_WIDTH_MOBILE = "18rem";
export const SIDEBAR_WIDTH_ICON = "3rem";
export const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export type SidebarState = "expanded" | "collapsed";
export type SidebarSide = "left" | "right";
export type SidebarVariant = "sidebar" | "floating" | "inset";
export type SidebarCollapsible = "offcanvas" | "icon" | "none";

export type SidebarInstanceContext = {
  id: string;
  state: ComputedRef<SidebarState>;
  open: Ref<boolean>;
  setOpen: (value: boolean) => void;
  isMobile: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpenMobile: (value: boolean) => void;
  toggleSidebar: () => void;
  side: SidebarSide;
  variant: SidebarVariant;
  collapsible: SidebarCollapsible;
};

export type SidebarProviderContext = {
  register: (context: SidebarInstanceContext) => void;
  unregister: (id: string) => void;
  getSidebar: (id: string) => SidebarInstanceContext | undefined;
  getFirstSidebar: () => SidebarInstanceContext | undefined;
};

export const [provideSidebarProviderContext, injectSidebarProviderContext] = createContext<SidebarProviderContext>("SidebarProvider");

export const [provideSidebarContext, injectSidebarContext] = createContext<SidebarInstanceContext>("Sidebar");

export function getSidebarCookieName(id: string) {
  return `${SIDEBAR_COOKIE_NAME}_${id}`;
}

export function readSidebarCookie(id: string, defaultOpen = true) {
  if (typeof document === "undefined") {
    return defaultOpen;
  }

  return !document.cookie.includes(`${getSidebarCookieName(id)}=false`);
}

export function writeSidebarCookie(id: string, open: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${getSidebarCookieName(id)}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
}

export function resolveSidebarContext(target?: MaybeRefOrGetter<string | undefined>): ComputedRef<SidebarInstanceContext | undefined> {
  const provider = injectSidebarProviderContext();
  const nearestContext = injectSidebarContext(undefined as unknown as SidebarInstanceContext);

  const targetId = computed(() => toValue(target));

  return computed(() => {
    const id = targetId.value;

    if (id) {
      return provider.getSidebar(id);
    }

    if (nearestContext) {
      return nearestContext;
    }

    return provider.getFirstSidebar();
  });
}

export function useSidebar(id?: MaybeRefOrGetter<string | undefined>): ComputedRef<SidebarInstanceContext | undefined> {
  return resolveSidebarContext(id);
}
