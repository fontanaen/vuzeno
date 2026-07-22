import ImageError from "./ImageError.vue";
import ImageFallback from "./ImageFallback.vue";
import ImageLoading from "./ImageLoading.vue";
import ImageRoot from "./ImageRoot.vue";
import ImageSource from "./ImageSource.vue";

export const Image = {
  Root: ImageRoot,
  Source: ImageSource,
  Loading: ImageLoading,
  Error: ImageError,
  Fallback: ImageFallback,
} as const;
