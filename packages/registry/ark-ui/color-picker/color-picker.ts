import ColorPickerArea from "./ColorPickerArea.vue";
import ColorPickerAreaBackground from "./ColorPickerAreaBackground.vue";
import ColorPickerAreaThumb from "./ColorPickerAreaThumb.vue";
import ColorPickerChannelInput from "./ColorPickerChannelInput.vue";
import ColorPickerChannelSlider from "./ColorPickerChannelSlider.vue";
import ColorPickerChannelSliderLabel from "./ColorPickerChannelSliderLabel.vue";
import ColorPickerChannelSliderThumb from "./ColorPickerChannelSliderThumb.vue";
import ColorPickerChannelSliderTrack from "./ColorPickerChannelSliderTrack.vue";
import ColorPickerChannelSliderValueText from "./ColorPickerChannelSliderValueText.vue";
import ColorPickerContent from "./ColorPickerContent.vue";
import ColorPickerContext from "./ColorPickerContext.vue";
import ColorPickerControl from "./ColorPickerControl.vue";
import ColorPickerEyeDropperTrigger from "./ColorPickerEyeDropperTrigger.vue";
import ColorPickerFormatSelect from "./ColorPickerFormatSelect.vue";
import ColorPickerFormatTrigger from "./ColorPickerFormatTrigger.vue";
import ColorPickerHiddenInput from "./ColorPickerHiddenInput.vue";
import ColorPickerLabel from "./ColorPickerLabel.vue";
import ColorPickerPositioner from "./ColorPickerPositioner.vue";
import ColorPickerRoot from "./ColorPickerRoot.vue";
import ColorPickerRootProvider from "./ColorPickerRootProvider.vue";
import ColorPickerSwatch from "./ColorPickerSwatch.vue";
import ColorPickerSwatchGroup from "./ColorPickerSwatchGroup.vue";
import ColorPickerSwatchIndicator from "./ColorPickerSwatchIndicator.vue";
import ColorPickerSwatchTrigger from "./ColorPickerSwatchTrigger.vue";
import ColorPickerTransparencyGrid from "./ColorPickerTransparencyGrid.vue";
import ColorPickerTrigger from "./ColorPickerTrigger.vue";
import ColorPickerValueSwatch from "./ColorPickerValueSwatch.vue";
import ColorPickerValueText from "./ColorPickerValueText.vue";
import ColorPickerView from "./ColorPickerView.vue";

export const ColorPicker = {
  AreaBackground: ColorPickerAreaBackground,
  AreaThumb: ColorPickerAreaThumb,
  Area: ColorPickerArea,
  ChannelInput: ColorPickerChannelInput,
  ChannelSliderLabel: ColorPickerChannelSliderLabel,
  ChannelSliderThumb: ColorPickerChannelSliderThumb,
  ChannelSliderTrack: ColorPickerChannelSliderTrack,
  ChannelSliderValueText: ColorPickerChannelSliderValueText,
  ChannelSlider: ColorPickerChannelSlider,
  Content: ColorPickerContent,
  Context: ColorPickerContext,
  Control: ColorPickerControl,
  EyeDropperTrigger: ColorPickerEyeDropperTrigger,
  FormatSelect: ColorPickerFormatSelect,
  FormatTrigger: ColorPickerFormatTrigger,
  HiddenInput: ColorPickerHiddenInput,
  Label: ColorPickerLabel,
  Positioner: ColorPickerPositioner,
  RootProvider: ColorPickerRootProvider,
  Root: ColorPickerRoot,
  SwatchGroup: ColorPickerSwatchGroup,
  SwatchIndicator: ColorPickerSwatchIndicator,
  SwatchTrigger: ColorPickerSwatchTrigger,
  Swatch: ColorPickerSwatch,
  TransparencyGrid: ColorPickerTransparencyGrid,
  Trigger: ColorPickerTrigger,
  ValueSwatch: ColorPickerValueSwatch,
  ValueText: ColorPickerValueText,
  View: ColorPickerView,
} as const;
