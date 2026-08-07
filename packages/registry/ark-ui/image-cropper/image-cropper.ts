import { ImageCropper as ArkImageCropper } from "@ark-ui/vue/image-cropper";
import ImageCropperContext from "./ImageCropperContext.vue";
import ImageCropperGrid from "./ImageCropperGrid.vue";
import ImageCropperHandle from "./ImageCropperHandle.vue";
import ImageCropperImage from "./ImageCropperImage.vue";
import ImageCropperRoot from "./ImageCropperRoot.vue";
import ImageCropperRootProvider from "./ImageCropperRootProvider.vue";
import ImageCropperSelection from "./ImageCropperSelection.vue";
import ImageCropperViewport from "./ImageCropperViewport.vue";

export const ImageCropper = {
  Context: ImageCropperContext,
  Grid: ImageCropperGrid,
  Handle: ImageCropperHandle,
  Image: ImageCropperImage,
  Root: ImageCropperRoot,
  RootProvider: ImageCropperRootProvider,
  Selection: ImageCropperSelection,
  Viewport: ImageCropperViewport,
  handles: ArkImageCropper.handles,
} as const;
