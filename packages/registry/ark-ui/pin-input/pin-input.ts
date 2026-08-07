import PinInputContext from "./PinInputContext.vue";
import PinInputControl from "./PinInputControl.vue";
import PinInputHiddenInput from "./PinInputHiddenInput.vue";
import PinInputInput from "./PinInputInput.vue";
import PinInputLabel from "./PinInputLabel.vue";
import PinInputRoot from "./PinInputRoot.vue";
import PinInputRootProvider from "./PinInputRootProvider.vue";

export const PinInput = {
  Context: PinInputContext,
  Control: PinInputControl,
  HiddenInput: PinInputHiddenInput,
  Input: PinInputInput,
  Label: PinInputLabel,
  RootProvider: PinInputRootProvider,
  Root: PinInputRoot,
} as const;
