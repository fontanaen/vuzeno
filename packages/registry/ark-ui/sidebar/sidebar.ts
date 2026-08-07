import SidebarContent from "./SidebarContent.vue";
import SidebarFooter from "./SidebarFooter.vue";
import SidebarGroup from "./SidebarGroup.vue";
import SidebarGroupAction from "./SidebarGroupAction.vue";
import SidebarGroupContent from "./SidebarGroupContent.vue";
import SidebarGroupLabel from "./SidebarGroupLabel.vue";
import SidebarHeader from "./SidebarHeader.vue";
import SidebarInset from "./SidebarInset.vue";
import SidebarMenu from "./SidebarMenu.vue";
import SidebarMenuAction from "./SidebarMenuAction.vue";
import SidebarMenuBadge from "./SidebarMenuBadge.vue";
import SidebarMenuButton from "./SidebarMenuButton.vue";
import SidebarMenuItem from "./SidebarMenuItem.vue";
import SidebarMenuSkeleton from "./SidebarMenuSkeleton.vue";
import SidebarMenuSub from "./SidebarMenuSub.vue";
import SidebarMenuSubButton from "./SidebarMenuSubButton.vue";
import SidebarMenuSubContent from "./SidebarMenuSubContent.vue";
import SidebarMenuSubItem from "./SidebarMenuSubItem.vue";
import SidebarMenuSubTrigger from "./SidebarMenuSubTrigger.vue";
import SidebarProvider from "./SidebarProvider.vue";
import SidebarRail from "./SidebarRail.vue";
import SidebarRoot from "./SidebarRoot.vue";
import SidebarSeparator from "./SidebarSeparator.vue";
import SidebarTrigger from "./SidebarTrigger.vue";

export const Sidebar = {
  Provider: SidebarProvider,
  Root: SidebarRoot,
  Trigger: SidebarTrigger,
  Rail: SidebarRail,
  Inset: SidebarInset,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  Separator: SidebarSeparator,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuButton: SidebarMenuButton,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubTrigger: SidebarMenuSubTrigger,
  MenuSubContent: SidebarMenuSubContent,
  MenuSubItem: SidebarMenuSubItem,
  MenuSubButton: SidebarMenuSubButton,
} as const;
