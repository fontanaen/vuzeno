import CollapsibleBody from "./CollapsibleBody.vue";
import CollapsibleContent from "./CollapsibleContent.vue";
import CollapsibleContext from "./CollapsibleContext.vue";
import CollapsibleIndicator from "./CollapsibleIndicator.vue";
import CollapsibleRoot from "./CollapsibleRoot.vue";
import CollapsibleRootProvider from "./CollapsibleRootProvider.vue";
import CollapsibleTrigger from "./CollapsibleTrigger.vue";

export const Collapsible = {
  Body: CollapsibleBody,
  Content: CollapsibleContent,
  Context: CollapsibleContext,
  RootProvider: CollapsibleRootProvider,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Indicator: CollapsibleIndicator,
} as const;
