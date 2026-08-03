import ScrollSpyItem from "./ScrollSpyItem.vue";
import ScrollSpyRoot from "./ScrollSpyRoot.vue";
import ScrollSpyTarget from "./ScrollSpyTarget.vue";
import ScrollSpyViewport from "./ScrollSpyViewport.vue";

export const ScrollSpy = {
  Root: ScrollSpyRoot,
  Viewport: ScrollSpyViewport,
  Item: ScrollSpyItem,
  Target: ScrollSpyTarget,
} as const;
