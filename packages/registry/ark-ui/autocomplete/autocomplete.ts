import { Combobox } from "@ark-ui/vue";
import { InputGroup } from "../input-group";
import AutocompleteClearTrigger from "./AutocompleteClearTrigger.vue";
import AutocompleteContent from "./AutocompleteContent.vue";
import AutocompleteControl from "./AutocompleteControl.vue";
import AutocompleteEmpty from "./AutocompleteEmpty.vue";
import AutocompleteInput from "./AutocompleteInput.vue";
import AutocompleteItem from "./AutocompleteItem.vue";
import AutocompleteItemContext from "./AutocompleteItemContext.vue";
import AutocompleteItemGroup from "./AutocompleteItemGroup.vue";
import AutocompleteItemGroupLabel from "./AutocompleteItemGroupLabel.vue";
import AutocompleteItemIndicator from "./AutocompleteItemIndicator.vue";
import AutocompleteItemSubtitle from "./AutocompleteItemSubtitle.vue";
import AutocompleteItemText from "./AutocompleteItemText.vue";
import AutocompleteItemTitle from "./AutocompleteItemTitle.vue";
import AutocompleteLabel from "./AutocompleteLabel.vue";
import AutocompleteList from "./AutocompleteList.vue";
import AutocompleteRoot from "./AutocompleteRoot.vue";
import AutocompleteRootProvider from "./AutocompleteRootProvider.vue";
import AutocompleteScroller from "./AutocompleteScroller.vue";
import AutocompleteStatus from "./AutocompleteStatus.vue";
import AutocompleteTag from "./AutocompleteTag.vue";
import AutocompleteTagPlaceholder from "./AutocompleteTagPlaceholder.vue";
import AutocompleteTags from "./AutocompleteTags.vue";
import AutocompleteTrigger from "./AutocompleteTrigger.vue";

export const Autocomplete = {
  ClearTrigger: AutocompleteClearTrigger,
  Content: AutocompleteContent,
  Empty: AutocompleteEmpty,
  Context: Combobox.Context,
  Control: AutocompleteControl,
  Indicators: InputGroup.Addon,
  Input: AutocompleteInput,
  ItemContext: AutocompleteItemContext,
  ItemGroupLabel: AutocompleteItemGroupLabel,
  ItemGroup: AutocompleteItemGroup,
  ItemIndicator: AutocompleteItemIndicator,
  ItemSubtitle: AutocompleteItemSubtitle,
  ItemText: AutocompleteItemText,
  ItemTitle: AutocompleteItemTitle,
  Item: AutocompleteItem,
  Label: AutocompleteLabel,
  List: AutocompleteList,
  RootProvider: AutocompleteRootProvider,
  Root: AutocompleteRoot,
  Scroller: AutocompleteScroller,
  Status: AutocompleteStatus,
  TagPlaceholder: AutocompleteTagPlaceholder,
  Tag: AutocompleteTag,
  Tags: AutocompleteTags,
  Trigger: AutocompleteTrigger,
} as const;
