import ProgressCircle from "./ProgressCircle.vue";
import ProgressCircleContainer from "./ProgressCircleContainer.vue";
import ProgressCircleRange from "./ProgressCircleRange.vue";
import ProgressCircleTrack from "./ProgressCircleTrack.vue";
import ProgressContext from "./ProgressContext.vue";
import ProgressLabel from "./ProgressLabel.vue";
import ProgressRange from "./ProgressRange.vue";
import ProgressRoot from "./ProgressRoot.vue";
import ProgressRootProvider from "./ProgressRootProvider.vue";
import ProgressTrack from "./ProgressTrack.vue";
import ProgressValueText from "./ProgressValueText.vue";
import ProgressView from "./ProgressView.vue";

export const Progress = {
  CircleContainer: ProgressCircleContainer,
  CircleRange: ProgressCircleRange,
  CircleTrack: ProgressCircleTrack,
  Circle: ProgressCircle,
  Context: ProgressContext,
  Label: ProgressLabel,
  Range: ProgressRange,
  RootProvider: ProgressRootProvider,
  Root: ProgressRoot,
  Track: ProgressTrack,
  ValueText: ProgressValueText,
  View: ProgressView,
} as const;
