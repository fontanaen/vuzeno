import DateInputContext from "./DateInputContext.vue";
import DateInputControl from "./DateInputControl.vue";
import DateInputHiddenInput from "./DateInputHiddenInput.vue";
import DateInputLabel from "./DateInputLabel.vue";
import DateInputRoot from "./DateInputRoot.vue";
import DateInputRootProvider from "./DateInputRootProvider.vue";
import DateInputSegment from "./DateInputSegment.vue";
import DateInputSegmentContext from "./DateInputSegmentContext.vue";
import DateInputSegmentGroup from "./DateInputSegmentGroup.vue";

export const DateInput = {
  Context: DateInputContext,
  SegmentContext: DateInputSegmentContext,
  Control: DateInputControl,
  HiddenInput: DateInputHiddenInput,
  Label: DateInputLabel,
  RootProvider: DateInputRootProvider,
  Root: DateInputRoot,
  SegmentGroup: DateInputSegmentGroup,
  Segment: DateInputSegment,
} as const;
