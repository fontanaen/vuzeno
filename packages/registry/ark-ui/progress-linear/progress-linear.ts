import ProgressLinearRange from "./ProgressLinearRange.vue";
import ProgressLinearRoot from "./ProgressLinearRoot.vue";
import ProgressLinearRootProvider from "./ProgressLinearRootProvider.vue";
import ProgressLinearTrack from "./ProgressLinearTrack.vue";
import ProgressLinearValueText from "./ProgressLinearValueText.vue";

export const ProgressLinear = {
  Range: ProgressLinearRange,
  RootProvider: ProgressLinearRootProvider,
  Root: ProgressLinearRoot,
  Track: ProgressLinearTrack,
  Value: ProgressLinearValueText,
} as const;
