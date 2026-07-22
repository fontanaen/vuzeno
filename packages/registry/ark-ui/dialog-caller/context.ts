import { createContext } from "@ark-ui/vue";
import type { DialogCallerCallContext } from "./types";

export const [provideDialogCallerContext, injectDialogCallerContext] = createContext<DialogCallerCallContext>("DialogCallerContext");
