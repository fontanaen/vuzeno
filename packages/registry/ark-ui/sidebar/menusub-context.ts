import { createContext } from "@ark-ui/vue";
import type { ComputedRef, Ref } from "vue";
import type { SidebarSide } from "./context";

export type SidebarMenuSubMode = "inline" | "flyout";

export type SidebarMenuSubContext = {
  mode: ComputedRef<SidebarMenuSubMode>;
  label?: string;
  menuOpen: Ref<boolean>;
  onTriggerEnter: () => void;
  onTriggerLeave: () => void;
  onContentEnter: () => void;
  onContentLeave: () => void;
  side: ComputedRef<SidebarSide>;
};

export const [provideSidebarMenuSubContext, injectSidebarMenuSubContext] = createContext<SidebarMenuSubContext>("SidebarMenuSub");
