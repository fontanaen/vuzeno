import PopoverAnchor from "./PopoverAnchor.vue";
import PopoverArrow from "./PopoverArrow.vue";
import PopoverArrowTip from "./PopoverArrowTip.vue";
import PopoverCloseTrigger from "./PopoverCloseTrigger.vue";
import PopoverContent from "./PopoverContent.vue";
import PopoverContext from "./PopoverContext.vue";
import PopoverDescription from "./PopoverDescription.vue";
import PopoverIndicator from "./PopoverIndicator.vue";
import PopoverRoot from "./PopoverRoot.vue";
import PopoverRootProvider from "./PopoverRootProvider.vue";
import PopoverTitle from "./PopoverTitle.vue";
import PopoverTrigger from "./PopoverTrigger.vue";

export const Popover = {
  Anchor: PopoverAnchor,
  ArrowTip: PopoverArrowTip,
  Arrow: PopoverArrow,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Context: PopoverContext,
  Description: PopoverDescription,
  Indicator: PopoverIndicator,
  RootProvider: PopoverRootProvider,
  Root: PopoverRoot,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
} as const;
