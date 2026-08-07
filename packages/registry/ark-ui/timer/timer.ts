import TimerActionTrigger from "./TimerActionTrigger.vue";
import TimerArea from "./TimerArea.vue";
import TimerContext from "./TimerContext.vue";
import TimerControl from "./TimerControl.vue";
import TimerItem from "./TimerItem.vue";
import TimerItemGroup from "./TimerItemGroup.vue";
import TimerItemLabel from "./TimerItemLabel.vue";
import TimerRoot from "./TimerRoot.vue";
import TimerRootProvider from "./TimerRootProvider.vue";
import TimerSeparator from "./TimerSeparator.vue";

export const Timer = {
  ActionTrigger: TimerActionTrigger,
  Context: TimerContext,
  Item: TimerItem,
  ItemGroup: TimerItemGroup,
  ItemLabel: TimerItemLabel,
  Area: TimerArea,
  Control: TimerControl,
  RootProvider: TimerRootProvider,
  Root: TimerRoot,
  Separator: TimerSeparator,
} as const;
