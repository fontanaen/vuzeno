import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";
import type { AlertVariants } from ".";

export type AlertContext = {
  variant: Ref<NonNullable<AlertVariants["variant"]>>;
};

export const [provideAlertContext, injectAlertContext] = createContext<AlertContext>("AlertContext");
