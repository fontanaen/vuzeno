import FieldContext from "./FieldContext.vue";
import FieldErrorText from "./FieldErrorText.vue";
import FieldHelperText from "./FieldHelperText.vue";
import FieldInput from "./FieldInput.vue";
import FieldItem from "./FieldItem.vue";
import FieldLabel from "./FieldLabel.vue";
import FieldRequiredIndicator from "./FieldRequiredIndicator.vue";
import FieldRoot from "./FieldRoot.vue";
import FieldRootProvider from "./FieldRootProvider.vue";
import FieldSelect from "./FieldSelect.vue";
import FieldTextarea from "./FieldTextarea.vue";

export const Field = {
  Context: FieldContext,
  ErrorText: FieldErrorText,
  HelperText: FieldHelperText,
  Input: FieldInput,
  Item: FieldItem,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  RootProvider: FieldRootProvider,
  Root: FieldRoot,
  Select: FieldSelect,
  Textarea: FieldTextarea,
} as const;
