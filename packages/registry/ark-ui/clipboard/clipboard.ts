import ClipboardContext from "./ClipboardContext.vue";
import ClipboardIndicator from "./ClipboardIndicator.vue";
import ClipboardInput from "./ClipboardInput.vue";
import ClipboardRoot from "./ClipboardRoot.vue";
import ClipboardRootProvider from "./ClipboardRootProvider.vue";
import ClipboardTrigger from "./ClipboardTrigger.vue";
import ClipboardValue from "./ClipboardValue.vue";

export const Clipboard = {
  Context: ClipboardContext,
  Indicator: ClipboardIndicator,
  Input: ClipboardInput,
  RootProvider: ClipboardRootProvider,
  Root: ClipboardRoot,
  Trigger: ClipboardTrigger,
  Value: ClipboardValue,
} as const;
