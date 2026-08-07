import ToggleContext from "./ToggleContext.vue";
import ToggleIndicator from "./ToggleIndicator.vue";
import ToggleRoot from "./ToggleRoot.vue";

export const Toggle = {
  Root: ToggleRoot,
  Indicator: ToggleIndicator,
  Context: ToggleContext,
} as const;
