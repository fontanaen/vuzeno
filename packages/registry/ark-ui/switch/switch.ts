import SwitchContext from "./SwitchContext.vue";
import SwitchControl from "./SwitchControl.vue";
import SwitchHiddenInput from "./SwitchHiddenInput.vue";
import SwitchLabel from "./SwitchLabel.vue";
import SwitchRoot from "./SwitchRoot.vue";
import SwitchRootProvider from "./SwitchRootProvider.vue";
import SwitchThumb from "./SwitchThumb.vue";

export const Switch = {
  Context: SwitchContext,
  Control: SwitchControl,
  HiddenInput: SwitchHiddenInput,
  Label: SwitchLabel,
  RootProvider: SwitchRootProvider,
  Root: SwitchRoot,
  Thumb: SwitchThumb,
} as const;
