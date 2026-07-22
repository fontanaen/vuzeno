import SegmentGroupContext from "./SegmentGroupContext.vue";
import SegmentGroupIndicator from "./SegmentGroupIndicator.vue";
import SegmentGroupItem from "./SegmentGroupItem.vue";
import SegmentGroupItemContext from "./SegmentGroupItemContext.vue";
import SegmentGroupItemControl from "./SegmentGroupItemControl.vue";
import SegmentGroupItemHiddenInput from "./SegmentGroupItemHiddenInput.vue";
import SegmentGroupItemText from "./SegmentGroupItemText.vue";
import SegmentGroupLabel from "./SegmentGroupLabel.vue";
import SegmentGroupRoot from "./SegmentGroupRoot.vue";
import SegmentGroupRootProvider from "./SegmentGroupRootProvider.vue";

export const SegmentGroup = {
  Context: SegmentGroupContext,
  Indicator: SegmentGroupIndicator,
  ItemContext: SegmentGroupItemContext,
  ItemControl: SegmentGroupItemControl,
  ItemHiddenInput: SegmentGroupItemHiddenInput,
  ItemText: SegmentGroupItemText,
  Item: SegmentGroupItem,
  Label: SegmentGroupLabel,
  RootProvider: SegmentGroupRootProvider,
  Root: SegmentGroupRoot,
} as const;
