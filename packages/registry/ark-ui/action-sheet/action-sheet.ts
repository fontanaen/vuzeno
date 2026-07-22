import ActionSheetCancel from "./ActionSheetCancel.vue";
import ActionSheetContent from "./ActionSheetContent.vue";
import ActionSheetGroup from "./ActionSheetGroup.vue";
import ActionSheetItem from "./ActionSheetItem.vue";
import ActionSheetOption from "./ActionSheetOption.vue";
import ActionSheetRoot from "./ActionSheetRoot.vue";
import ActionSheetRootProvider from "./ActionSheetRootProvider.vue";
import ActionSheetTrigger from "./ActionSheetTrigger.vue";

export const ActionSheet = {
  Root: ActionSheetRoot,
  Provider: ActionSheetRootProvider,
  Trigger: ActionSheetTrigger,
  Content: ActionSheetContent,
  Group: ActionSheetGroup,
  Item: ActionSheetItem,
  Option: ActionSheetOption,
  Cancel: ActionSheetCancel,
} as const;
