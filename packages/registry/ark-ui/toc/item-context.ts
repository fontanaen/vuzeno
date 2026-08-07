import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";

export type TocItemContext = {
  value: ComputedRef<string>;
  depth: ComputedRef<number>;
  isActive: ComputedRef<boolean>;
};

export const [provideTocItemContext, injectTocItemContext] = createContext<TocItemContext>("TocItem");
