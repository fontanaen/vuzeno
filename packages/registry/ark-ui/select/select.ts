import SelectClearTrigger from "./SelectClearTrigger.vue";
import SelectContent from "./SelectContent.vue";
import SelectContext from "./SelectContext.vue";
import SelectIndicator from "./SelectIndicator.vue";
import SelectIndicators from "./SelectIndicators.vue";
import SelectItem from "./SelectItem.vue";
import SelectItemContext from "./SelectItemContext.vue";
import SelectItemGroup from "./SelectItemGroup.vue";
import SelectItemGroupLabel from "./SelectItemGroupLabel.vue";
import SelectItemIndicator from "./SelectItemIndicator.vue";
import SelectItemText from "./SelectItemText.vue";
import SelectLabel from "./SelectLabel.vue";
import SelectList from "./SelectList.vue";
import SelectRoot from "./SelectRoot.vue";
import SelectRootProvider from "./SelectRootProvider.vue";
import SelectTrigger from "./SelectTrigger.vue";
import SelectValue from "./SelectValue.vue";

export const Select = {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectContext,
  Indicator: SelectIndicator,
  Indicators: SelectIndicators,
  ItemContext: SelectItemContext,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemGroup: SelectItemGroup,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Item: SelectItem,
  Label: SelectLabel,
  List: SelectList,
  RootProvider: SelectRootProvider,
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
} as const;
