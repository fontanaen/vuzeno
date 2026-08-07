import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";

export type SwitchSize = "sm" | "default" | "lg";

export type SwitchContext = {
  size: Ref<SwitchSize>;
};

export const [provideSwitchContext, injectSwitchContext] = createContext<SwitchContext>("SwitchContext");
