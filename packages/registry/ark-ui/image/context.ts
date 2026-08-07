import { createContext } from "@ark-ui/vue";
import type { ComputedRef } from "vue";
import type { ImageApi } from "./types";

export type ImageContext = ComputedRef<ImageApi>;

export const [provideImageContext, injectImageContext] = createContext<ImageContext>("Image");
