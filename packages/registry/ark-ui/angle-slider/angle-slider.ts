import AngleSliderContext from "./AngleSliderContext.vue";
import AngleSliderControl from "./AngleSliderControl.vue";
import AngleSliderHiddenInput from "./AngleSliderHiddenInput.vue";
import AngleSliderLabel from "./AngleSliderLabel.vue";
import AngleSliderMarker from "./AngleSliderMarker.vue";
import AngleSliderMarkerGroup from "./AngleSliderMarkerGroup.vue";
import AngleSliderRoot from "./AngleSliderRoot.vue";
import AngleSliderRootProvider from "./AngleSliderRootProvider.vue";
import AngleSliderThumb from "./AngleSliderThumb.vue";
import AngleSliderValueText from "./AngleSliderValueText.vue";

export const AngleSlider = {
  Context: AngleSliderContext,
  Root: AngleSliderRoot,
  Control: AngleSliderControl,
  HiddenInput: AngleSliderHiddenInput,
  Label: AngleSliderLabel,
  MarkerGroup: AngleSliderMarkerGroup,
  Marker: AngleSliderMarker,
  RootProvider: AngleSliderRootProvider,
  Thumb: AngleSliderThumb,
  ValueText: AngleSliderValueText,
} as const;
