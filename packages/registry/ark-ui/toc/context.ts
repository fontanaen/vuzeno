import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";
import type { TocApi } from "./types";

export type TocContext = ComputedRef<TocApi>;

export const [provideTocContext, injectTocContext] = createContext<TocContext>("Toc");
