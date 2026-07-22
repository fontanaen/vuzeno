import StepsCompletedContent from "./StepsCompletedContent.vue";
import StepsContent from "./StepsContent.vue";
import StepsContext from "./StepsContext.vue";
import StepsIndicator from "./StepsIndicator.vue";
import StepsItem from "./StepsItem.vue";
import StepsItemContext from "./StepsItemContext.vue";
import StepsList from "./StepsList.vue";
import StepsNextTrigger from "./StepsNextTrigger.vue";
import StepsPrevTrigger from "./StepsPrevTrigger.vue";
import StepsProgress from "./StepsProgress.vue";
import StepsRoot from "./StepsRoot.vue";
import StepsRootProvider from "./StepsRootProvider.vue";
import StepsSeparator from "./StepsSeparator.vue";
import StepsTrigger from "./StepsTrigger.vue";

export const Steps = {
  CompletedContent: StepsCompletedContent,
  Content: StepsContent,
  Context: StepsContext,
  Indicator: StepsIndicator,
  ItemContext: StepsItemContext,
  Item: StepsItem,
  List: StepsList,
  NextTrigger: StepsNextTrigger,
  PrevTrigger: StepsPrevTrigger,
  Progress: StepsProgress,
  RootProvider: StepsRootProvider,
  Root: StepsRoot,
  Separator: StepsSeparator,
  Trigger: StepsTrigger,
} as const;
