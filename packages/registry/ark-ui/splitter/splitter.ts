import SplitterContext from "./SplitterContext.vue";
import SplitterPanel from "./SplitterPanel.vue";
import SplitterResizeTrigger from "./SplitterResizeTrigger.vue";
import SplitterResizeTriggerIndicator from "./SplitterResizeTriggerIndicator.vue";
import SplitterRoot from "./SplitterRoot.vue";
import SplitterRootProvider from "./SplitterRootProvider.vue";

export const Splitter = {
  Context: SplitterContext,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
  ResizeTriggerIndicator: SplitterResizeTriggerIndicator,
  RootProvider: SplitterRootProvider,
  Root: SplitterRoot,
} as const;
