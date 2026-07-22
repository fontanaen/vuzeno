import NumberInputContext from "./NumberInputContext.vue";
import NumberInputControl from "./NumberInputControl.vue";
import NumberInputDecrementTrigger from "./NumberInputDecrementTrigger.vue";
import NumberInputIncrementTrigger from "./NumberInputIncrementTrigger.vue";
import NumberInputInput from "./NumberInputInput.vue";
import NumberInputLabel from "./NumberInputLabel.vue";
import NumberInputRoot from "./NumberInputRoot.vue";
import NumberInputRootProvider from "./NumberInputRootProvider.vue";
import NumberInputScrubber from "./NumberInputScrubber.vue";
import NumberInputTriggerGroup from "./NumberInputTriggerGroup.vue";
import NumberInputValueText from "./NumberInputValueText.vue";

export const NumberInput = {
  Context: NumberInputContext,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Label: NumberInputLabel,
  RootProvider: NumberInputRootProvider,
  Root: NumberInputRoot,
  Scrubber: NumberInputScrubber,
  TriggerGroup: NumberInputTriggerGroup,
  ValueText: NumberInputValueText,
} as const;
