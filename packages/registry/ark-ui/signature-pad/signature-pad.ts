import SignaturePadClearTrigger from "./SignaturePadClearTrigger.vue";
import SignaturePadContext from "./SignaturePadContext.vue";
import SignaturePadControl from "./SignaturePadControl.vue";
import SignaturePadGuide from "./SignaturePadGuide.vue";
import SignaturePadHiddenInput from "./SignaturePadHiddenInput.vue";
import SignaturePadLabel from "./SignaturePadLabel.vue";
import SignaturePadRoot from "./SignaturePadRoot.vue";
import SignaturePadRootProvider from "./SignaturePadRootProvider.vue";
import SignaturePadSegment from "./SignaturePadSegment.vue";

export const SignaturePad = {
  ClearTrigger: SignaturePadClearTrigger,
  Context: SignaturePadContext,
  Control: SignaturePadControl,
  Guide: SignaturePadGuide,
  HiddenInput: SignaturePadHiddenInput,
  Label: SignaturePadLabel,
  RootProvider: SignaturePadRootProvider,
  Root: SignaturePadRoot,
  Segment: SignaturePadSegment,
} as const;
