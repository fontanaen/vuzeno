import RadioGroupContext from "./RadioGroupContext.vue";
import RadioGroupIndicator from "./RadioGroupIndicator.vue";
import RadioGroupItem from "./RadioGroupItem.vue";
import RadioGroupItemContext from "./RadioGroupItemContext.vue";
import RadioGroupItemControl from "./RadioGroupItemControl.vue";
import RadioGroupItemHiddenInput from "./RadioGroupItemHiddenInput.vue";
import RadioGroupItemText from "./RadioGroupItemText.vue";
import RadioGroupRoot from "./RadioGroupRoot.vue";
import RadioGroupRootProvider from "./RadioGroupRootProvider.vue";

export const RadioGroup = {
  Context: RadioGroupContext,
  Indicator: RadioGroupIndicator,
  ItemContext: RadioGroupItemContext,
  ItemControl: RadioGroupItemControl,
  ItemHiddenInput: RadioGroupItemHiddenInput,
  ItemText: RadioGroupItemText,
  Item: RadioGroupItem,
  RootProvider: RadioGroupRootProvider,
  Root: RadioGroupRoot,
} as const;
