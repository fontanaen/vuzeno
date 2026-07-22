import DialogCallerDialogShell from "./DialogCallerDialogShell.vue";
import DialogCallerHost from "./DialogCallerHost.vue";

export const DialogCaller = {
  Host: DialogCallerHost,
  DialogShell: DialogCallerDialogShell,
} as const;
