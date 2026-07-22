import CheckboxContext from "./CheckboxContext.vue";
import CheckboxControl from "./CheckboxControl.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import CheckboxGroupProvider from "./CheckboxGroupProvider.vue";
import CheckboxHiddenInput from "./CheckboxHiddenInput.vue";
import CheckboxIndicator from "./CheckboxIndicator.vue";
import CheckboxLabel from "./CheckboxLabel.vue";
import CheckboxRoot from "./CheckboxRoot.vue";
import CheckboxRootProvider from "./CheckboxRootProvider.vue";

export const Checkbox = {
  Context: CheckboxContext,
  Control: CheckboxControl,
  Group: CheckboxGroup,
  GroupProvider: CheckboxGroupProvider,
  HiddenInput: CheckboxHiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  RootProvider: CheckboxRootProvider,
  Root: CheckboxRoot,
} as const;
