import SliderContext from "./SliderContext.vue";
import SliderControl from "./SliderControl.vue";
import SliderDraggingIndicator from "./SliderDraggingIndicator.vue";
import SliderHiddenInput from "./SliderHiddenInput.vue";
import SliderLabel from "./SliderLabel.vue";
import SliderMarker from "./SliderMarker.vue";
import SliderMarkerGroup from "./SliderMarkerGroup.vue";
import SliderRange from "./SliderRange.vue";
import SliderRoot from "./SliderRoot.vue";
import SliderRootProvider from "./SliderRootProvider.vue";
import SliderThumb from "./SliderThumb.vue";
import SliderTrack from "./SliderTrack.vue";
import SliderValueText from "./SliderValueText.vue";

export const Slider = {
  Context: SliderContext,
  Control: SliderControl,
  DraggingIndicator: SliderDraggingIndicator,
  HiddenInput: SliderHiddenInput,
  Label: SliderLabel,
  MarkerGroup: SliderMarkerGroup,
  Marker: SliderMarker,
  Range: SliderRange,
  RootProvider: SliderRootProvider,
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  ValueText: SliderValueText,
} as const;
