import PasswordInputContext from "./PasswordInputContext.vue";
import PasswordInputIndicator from "./PasswordInputIndicator.vue";
import PasswordInputInput from "./PasswordInputInput.vue";
import PasswordInputRoot from "./PasswordInputRoot.vue";
import PasswordInputRootProvider from "./PasswordInputRootProvider.vue";
import PasswordInputVisibilityTrigger from "./PasswordInputVisibilityTrigger.vue";

export const PasswordInput = {
  Context: PasswordInputContext,
  Indicator: PasswordInputIndicator,
  Input: PasswordInputInput,
  Root: PasswordInputRoot,
  RootProvider: PasswordInputRootProvider,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
} as const;
