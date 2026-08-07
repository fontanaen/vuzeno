import QrCodeContext from "./QrCodeContext.vue";
import QrCodeDownloadTrigger from "./QrCodeDownloadTrigger.vue";
import QrCodeFrame from "./QrCodeFrame.vue";
import QrCodeOverlay from "./QrCodeOverlay.vue";
import QrCodePattern from "./QrCodePattern.vue";
import QrCodeRoot from "./QrCodeRoot.vue";
import QrCodeRootProvider from "./QrCodeRootProvider.vue";

export const QrCode = {
  Context: QrCodeContext,
  DownloadTrigger: QrCodeDownloadTrigger,
  Frame: QrCodeFrame,
  Overlay: QrCodeOverlay,
  Pattern: QrCodePattern,
  RootProvider: QrCodeRootProvider,
  Root: QrCodeRoot,
} as const;
