import ScrollAreaContent from "./ScrollAreaContent.vue";
import ScrollAreaContext from "./ScrollAreaContext.vue";
import ScrollAreaCorner from "./ScrollAreaCorner.vue";
import ScrollAreaRoot from "./ScrollAreaRoot.vue";
import ScrollAreaRootProvider from "./ScrollAreaRootProvider.vue";
import ScrollAreaScrollbar from "./ScrollAreaScrollbar.vue";
import ScrollAreaShadow from "./ScrollAreaShadow.vue";
import ScrollAreaThumb from "./ScrollAreaThumb.vue";
import ScrollAreaViewport from "./ScrollAreaViewport.vue";

export const ScrollArea = {
  Context: ScrollAreaContext,
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Root: ScrollAreaRoot,
  RootProvider: ScrollAreaRootProvider,
  Scrollbar: ScrollAreaScrollbar,
  Shadow: ScrollAreaShadow,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
} as const;
