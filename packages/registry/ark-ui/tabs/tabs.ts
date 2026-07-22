import TabContent from "./TabContent.vue";
import TabIndicator from "./TabIndicator.vue";
import TabList from "./TabList.vue";
import TabsContext from "./TabsContext.vue";
import TabsRoot from "./TabsRoot.vue";
import TabsRootProvider from "./TabsRootProvider.vue";
import TabTrigger from "./TabTrigger.vue";
import TabTriggerIndicator from "./TabTriggerIndicator.vue";

export const Tabs = {
  TabContent: TabContent,
  TabIndicator: TabIndicator,
  TabList: TabList,
  TabTrigger: TabTrigger,
  TabTriggerIndicator: TabTriggerIndicator,
  Context: TabsContext,
  RootProvider: TabsRootProvider,
  Root: TabsRoot,
} as const;
