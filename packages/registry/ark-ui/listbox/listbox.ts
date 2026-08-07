import ListboxContent from "./ListboxContent.vue";
import ListboxContext from "./ListboxContext.vue";
import ListboxEmpty from "./ListboxEmpty.vue";
import ListboxInput from "./ListboxInput.vue";
import ListboxItem from "./ListboxItem.vue";
import ListboxItemContext from "./ListboxItemContext.vue";
import ListboxItemGroup from "./ListboxItemGroup.vue";
import ListboxItemGroupLabel from "./ListboxItemGroupLabel.vue";
import ListboxItemIndicator from "./ListboxItemIndicator.vue";
import ListboxItemText from "./ListboxItemText.vue";
import ListboxLabel from "./ListboxLabel.vue";
import ListboxRoot from "./ListboxRoot.vue";
import ListboxRootProvider from "./ListboxRootProvider.vue";
import ListboxValueText from "./ListboxValueText.vue";

export const Listbox = {
  Context: ListboxContext,
  Content: ListboxContent,
  Empty: ListboxEmpty,
  Input: ListboxInput,
  Item: ListboxItem,
  ItemContext: ListboxItemContext,
  ItemGroup: ListboxItemGroup,
  ItemGroupLabel: ListboxItemGroupLabel,
  ItemIndicator: ListboxItemIndicator,
  ItemText: ListboxItemText,
  Label: ListboxLabel,
  Root: ListboxRoot,
  RootProvider: ListboxRootProvider,
  ValueText: ListboxValueText,
} as const;
