import MenuArrow from "./MenuArrow.vue";
import MenuArrowTip from "./MenuArrowTip.vue";
import MenuCheckboxItem from "./MenuCheckboxItem.vue";
import MenuContent from "./MenuContent.vue";
import MenuContext from "./MenuContext.vue";
import MenuContextTrigger from "./MenuContextTrigger.vue";
import MenuIndicator from "./MenuIndicator.vue";
import MenuItem from "./MenuItem.vue";
import MenuItemContext from "./MenuItemContext.vue";
import MenuItemGroup from "./MenuItemGroup.vue";
import MenuItemGroupLabel from "./MenuItemGroupLabel.vue";
import MenuItemIndicator from "./MenuItemIndicator.vue";
import MenuItemText from "./MenuItemText.vue";
import MenuRadioItem from "./MenuRadioItem.vue";
import MenuRadioItemGroup from "./MenuRadioItemGroup.vue";
import MenuRoot from "./MenuRoot.vue";
import MenuRootProvider from "./MenuRootProvider.vue";
import MenuSeparator from "./MenuSeparator.vue";
import MenuTrigger from "./MenuTrigger.vue";
import MenuTriggerItem from "./MenuTriggerItem.vue";

export const Menu = {
  ArrowTip: MenuArrowTip,
  Arrow: MenuArrow,
  CheckboxItem: MenuCheckboxItem,
  Content: MenuContent,
  ContextTrigger: MenuContextTrigger,
  Context: MenuContext,
  Indicator: MenuIndicator,
  ItemContext: MenuItemContext,
  ItemGroupLabel: MenuItemGroupLabel,
  ItemGroup: MenuItemGroup,
  ItemIndicator: MenuItemIndicator,
  ItemText: MenuItemText,
  Item: MenuItem,
  RadioItemGroup: MenuRadioItemGroup,
  RadioItem: MenuRadioItem,
  RootProvider: MenuRootProvider,
  Root: MenuRoot,
  Separator: MenuSeparator,
  TriggerItem: MenuTriggerItem,
  Trigger: MenuTrigger,
} as const;
