import DialogCallerDialogShell from "./DialogCallerDialogShell.vue";
import DialogCallerHost from "./DialogCallerHost.vue";
import DialogCallerRootProvider from "./DialogCallerRootProvider.vue";

export const DialogCaller = {
  Host: DialogCallerHost,
  Provider: DialogCallerRootProvider,
  DialogShell: DialogCallerDialogShell,
} as const;
