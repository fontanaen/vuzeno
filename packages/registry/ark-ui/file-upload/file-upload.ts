import FileUploadClearTrigger from "./FileUploadClearTrigger.vue";
import FileUploadContext from "./FileUploadContext.vue";
import FileUploadDropzone from "./FileUploadDropzone.vue";
import FileUploadHiddenInput from "./FileUploadHiddenInput.vue";
import FileUploadItem from "./FileUploadItem.vue";
import FileUploadItemDeleteTrigger from "./FileUploadItemDeleteTrigger.vue";
import FileUploadItemGroup from "./FileUploadItemGroup.vue";
import FileUploadItemName from "./FileUploadItemName.vue";
import FileUploadItemPreview from "./FileUploadItemPreview.vue";
import FileUploadItemPreviewImage from "./FileUploadItemPreviewImage.vue";
import FileUploadItemSizeText from "./FileUploadItemSizeText.vue";
import FileUploadLabel from "./FileUploadLabel.vue";
import FileUploadRoot from "./FileUploadRoot.vue";
import FileUploadRootProvider from "./FileUploadRootProvider.vue";
import FileUploadTrigger from "./FileUploadTrigger.vue";

export const FileUpload = {
  ClearTrigger: FileUploadClearTrigger,
  Context: FileUploadContext,
  Dropzone: FileUploadDropzone,
  HiddenInput: FileUploadHiddenInput,
  ItemDeleteTrigger: FileUploadItemDeleteTrigger,
  ItemGroup: FileUploadItemGroup,
  ItemName: FileUploadItemName,
  ItemPreviewImage: FileUploadItemPreviewImage,
  ItemPreview: FileUploadItemPreview,
  ItemSizeText: FileUploadItemSizeText,
  Item: FileUploadItem,
  Label: FileUploadLabel,
  RootProvider: FileUploadRootProvider,
  Root: FileUploadRoot,
  Trigger: FileUploadTrigger,
} as const;
