import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";
import type { ScrollSpyApi } from "./types";

export type ScrollSpyContext = ComputedRef<ScrollSpyApi>;

export const [provideScrollSpyContext, injectScrollSpyContext] = createContext<ScrollSpyContext>("ScrollSpy");
