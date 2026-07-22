import FieldsetContext from "./FieldsetContext.vue";
import FieldsetErrorText from "./FieldsetErrorText.vue";
import FieldsetHelperText from "./FieldsetHelperText.vue";
import FieldsetLegend from "./FieldsetLegend.vue";
import FieldsetRoot from "./FieldsetRoot.vue";
import FieldsetRootProvider from "./FieldsetRootProvider.vue";

export const Fieldset = {
  Context: FieldsetContext,
  ErrorText: FieldsetErrorText,
  HelperText: FieldsetHelperText,
  Legend: FieldsetLegend,
  RootProvider: FieldsetRootProvider,
  Root: FieldsetRoot,
} as const;
