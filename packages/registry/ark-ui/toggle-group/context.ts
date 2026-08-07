import { createContext } from "@ark-ui/vue";
import type { Ref } from "vue";
import type { ToggleGroupVariants } from "./variants";

export type ToggleGroupContext = {
  variant: Ref<ToggleGroupVariants["variant"]>;
  size: Ref<ToggleGroupVariants["size"]>;
};

export const [provideToggleGroupContext, injectToggleGroupContext] = createContext<ToggleGroupContext>("ToggleGroupContext");
