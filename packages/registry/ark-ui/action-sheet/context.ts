import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";
import type { ActionSheetApi } from "./types";

export type ActionSheetContext = ComputedRef<ActionSheetApi>;

export const [provideActionSheetContext, injectActionSheetContext] = createContext<ActionSheetContext>("ActionSheet");
