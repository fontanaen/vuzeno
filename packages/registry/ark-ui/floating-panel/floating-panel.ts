import FloatingPanelBody from "./FloatingPanelBody.vue";
import FloatingPanelCloseTrigger from "./FloatingPanelCloseTrigger.vue";
import FloatingPanelContent from "./FloatingPanelContent.vue";
import FloatingPanelContext from "./FloatingPanelContext.vue";
import FloatingPanelControl from "./FloatingPanelControl.vue";
import FloatingPanelDragTrigger from "./FloatingPanelDragTrigger.vue";
import FloatingPanelHeader from "./FloatingPanelHeader.vue";
import FloatingPanelPositioner from "./FloatingPanelPositioner.vue";
import FloatingPanelResizeTrigger from "./FloatingPanelResizeTrigger.vue";
import FloatingPanelRoot from "./FloatingPanelRoot.vue";
import FloatingPanelRootProvider from "./FloatingPanelRootProvider.vue";
import FloatingPanelStageTrigger from "./FloatingPanelStageTrigger.vue";
import FloatingPanelTitle from "./FloatingPanelTitle.vue";
import FloatingPanelTrigger from "./FloatingPanelTrigger.vue";

export const FloatingPanel = {
  Body: FloatingPanelBody,
  CloseTrigger: FloatingPanelCloseTrigger,
  Content: FloatingPanelContent,
  Context: FloatingPanelContext,
  DragTrigger: FloatingPanelDragTrigger,
  Header: FloatingPanelHeader,
  Positioner: FloatingPanelPositioner,
  ResizeTrigger: FloatingPanelResizeTrigger,
  StageTrigger: FloatingPanelStageTrigger,
  Root: FloatingPanelRoot,
  RootProvider: FloatingPanelRootProvider,
  Title: FloatingPanelTitle,
  Trigger: FloatingPanelTrigger,
  Control: FloatingPanelControl,
} as const;
