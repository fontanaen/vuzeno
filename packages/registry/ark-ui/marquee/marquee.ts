import MarqueeContent from "./MarqueeContent.vue";
import MarqueeContext from "./MarqueeContext.vue";
import MarqueeEdge from "./MarqueeEdge.vue";
import MarqueeItem from "./MarqueeItem.vue";
import MarqueeRoot from "./MarqueeRoot.vue";
import MarqueeRootProvider from "./MarqueeRootProvider.vue";
import MarqueeViewport from "./MarqueeViewport.vue";

export const Marquee = {
  Content: MarqueeContent,
  Context: MarqueeContext,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
  RootProvider: MarqueeRootProvider,
  Viewport: MarqueeViewport,
} as const;
