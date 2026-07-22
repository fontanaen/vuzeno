import HoverCardArrow from "./HoverCardArrow.vue";
import HoverCardArrowTip from "./HoverCardArrowTip.vue";
import HoverCardContent from "./HoverCardContent.vue";
import HoverCardContext from "./HoverCardContext.vue";
import HoverCardPositioner from "./HoverCardPositioner.vue";
import HoverCardRoot from "./HoverCardRoot.vue";
import HoverCardRootProvider from "./HoverCardRootProvider.vue";
import HoverCardTrigger from "./HoverCardTrigger.vue";

export const HoverCard = {
  ArrowTip: HoverCardArrowTip,
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Context: HoverCardContext,
  Positioner: HoverCardPositioner,
  RootProvider: HoverCardRootProvider,
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
} as const;
