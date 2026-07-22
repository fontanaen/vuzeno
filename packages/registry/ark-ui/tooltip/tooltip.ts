import { Tooltip as ArkTooltip } from "@ark-ui/vue";
import TooltipArrow from "./TooltipArrow.vue";
import TooltipArrowTip from "./TooltipArrowTip.vue";
import TooltipContent from "./TooltipContent.vue";
import TooltipRoot from "./TooltipRoot.vue";
import TooltipRootProvider from "./TooltipRootProvider.vue";
import TooltipTrigger from "./TooltipTrigger.vue";

export const Tooltip = {
  ArrowTip: TooltipArrowTip,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Context: ArkTooltip.Context,
  RootProvider: TooltipRootProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
} as const;
