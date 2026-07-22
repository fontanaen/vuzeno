import TourActions from "./TourActions.vue";
import TourActionTrigger from "./TourActionTrigger.vue";
import TourArrow from "./TourArrow.vue";
import TourArrowTip from "./TourArrowTip.vue";
import TourBackdrop from "./TourBackdrop.vue";
import TourCloseTrigger from "./TourCloseTrigger.vue";
import TourContent from "./TourContent.vue";
import TourContext from "./TourContext.vue";
import TourControl from "./TourControl.vue";
import TourDescription from "./TourDescription.vue";
import TourPositioner from "./TourPositioner.vue";
import TourProgressText from "./TourProgressText.vue";
import TourRoot from "./TourRoot.vue";
import TourSpotlight from "./TourSpotlight.vue";
import TourTitle from "./TourTitle.vue";

export const Tour = {
  ActionTrigger: TourActionTrigger,
  Actions: TourActions,
  ArrowTip: TourArrowTip,
  Arrow: TourArrow,
  Backdrop: TourBackdrop,
  CloseTrigger: TourCloseTrigger,
  Content: TourContent,
  Context: TourContext,
  Control: TourControl,
  Description: TourDescription,
  Positioner: TourPositioner,
  ProgressText: TourProgressText,
  Root: TourRoot,
  Spotlight: TourSpotlight,
  Title: TourTitle,
} as const;
