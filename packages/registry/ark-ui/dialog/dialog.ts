import type { Component } from "vue";
import DialogActions from "./DialogActions.vue";
import DialogBody from "./DialogBody.vue";
import DialogCloseTrigger from "./DialogCloseTrigger.vue";
import DialogContent from "./DialogContent.vue";
import DialogContext from "./DialogContext.vue";
import DialogDescription from "./DialogDescription.vue";
import DialogFooter from "./DialogFooter.vue";
import DialogHeader from "./DialogHeader.vue";
import DialogRoot from "./DialogRoot.vue";
import DialogRootProvider from "./DialogRootProvider.vue";
import DialogScrollContainer from "./DialogScrollContainer.vue";
import DialogScrollSection from "./DialogScrollSection.vue";
import DialogTitle from "./DialogTitle.vue";
import DialogTrigger from "./DialogTrigger.vue";

export const Dialog = {
  Actions: DialogActions,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Context: DialogContext,
  Description: DialogDescription,
  RootProvider: DialogRootProvider,
  Root: DialogRoot,
  ScrollContainer: DialogScrollContainer,
  ScrollSection: DialogScrollSection,
  Title: DialogTitle,
  Header: DialogHeader,
  Footer: DialogFooter,
  Trigger: DialogTrigger,
} as const;
