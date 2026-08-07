import ToastActionTrigger from "./ToastActionTrigger.vue";
import ToastCloseTrigger from "./ToastCloseTrigger.vue";
import ToastContext from "./ToastContext.vue";
import ToastDescription from "./ToastDescription.vue";
import Toaster from "./Toaster.vue";
import ToastIndicator from "./ToastIndicator.vue";
import ToastRoot from "./ToastRoot.vue";
import ToastTitle from "./ToastTitle.vue";

export const Toast = {
  ActionTrigger: ToastActionTrigger,
  CloseTrigger: ToastCloseTrigger,
  Context: ToastContext,
  Description: ToastDescription,
  Indicator: ToastIndicator,
  Root: ToastRoot,
  Title: ToastTitle,
  Toaster: Toaster,
} as const;
