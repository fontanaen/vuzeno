import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";
import type { DialogCallerApi, DialogCallerCallContext } from "./types";

export type DialogCallerHostContext = ComputedRef<DialogCallerApi>;

export const [provideDialogCallerHostContext, injectDialogCallerHostContext] = createContext<DialogCallerHostContext>("DialogCallerHost");

export const [provideDialogCallerContext, injectDialogCallerContext] = createContext<DialogCallerCallContext>("DialogCallerContext");
