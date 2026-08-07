import DrawerCloseTrigger from "./DrawerCloseTrigger.vue";
import DrawerContent from "./DrawerContent.vue";
import DrawerContext from "./DrawerContext.vue";
import DrawerDescription from "./DrawerDescription.vue";
import DrawerGrabber from "./DrawerGrabber.vue";
import DrawerGrabberIndicator from "./DrawerGrabberIndicator.vue";
import DrawerIndent from "./DrawerIndent.vue";
import DrawerIndentBackground from "./DrawerIndentBackground.vue";
import DrawerRoot from "./DrawerRoot.vue";
import DrawerRootProvider from "./DrawerRootProvider.vue";
import DrawerStack from "./DrawerStack.vue";
import DrawerSwipeArea from "./DrawerSwipeArea.vue";
import DrawerTitle from "./DrawerTitle.vue";
import DrawerTrigger from "./DrawerTrigger.vue";

export const Drawer = {
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  Description: DrawerDescription,
  Context: DrawerContext,
  Grabber: DrawerGrabber,
  GrabberIndicator: DrawerGrabberIndicator,
  Indent: DrawerIndent,
  IndentBackground: DrawerIndentBackground,
  Root: DrawerRoot,
  RootProvider: DrawerRootProvider,
  Stack: DrawerStack,
  SwipeArea: DrawerSwipeArea,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
} as const;
