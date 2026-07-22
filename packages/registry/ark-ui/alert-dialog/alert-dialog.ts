import { Dialog } from "../dialog";
import AlertDialogCancel from "./AlertDialogCancel.vue";
import AlertDialogConfirm from "./AlertDialogConfirm.vue";
import AlertDialogContent from "./AlertDialogContent.vue";
import AlertDialogRoot from "./AlertDialogRoot.vue";

export const AlertDialog = {
  Cancel: AlertDialogCancel,
  Confirm: AlertDialogConfirm,
  Body: Dialog.Body,
  CloseTrigger: Dialog.CloseTrigger,
  Content: AlertDialogContent,
  Context: Dialog.Context,
  Description: Dialog.Description,
  Footer: Dialog.Footer,
  Header: Dialog.Header,
  Root: AlertDialogRoot,
  RootProvider: Dialog.RootProvider,
  ScrollContainer: Dialog.ScrollContainer,
  ScrollSection: Dialog.ScrollSection,
  Title: Dialog.Title,
  Trigger: Dialog.Trigger,
} as const;
