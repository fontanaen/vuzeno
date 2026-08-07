import RatingGroupContext from "./RatingGroupContext.vue";
import RatingGroupControl from "./RatingGroupControl.vue";
import RatingGroupHiddenInput from "./RatingGroupHiddenInput.vue";
import RatingGroupItem from "./RatingGroupItem.vue";
import RatingGroupItemContext from "./RatingGroupItemContext.vue";
import RatingGroupItemIndicator from "./RatingGroupItemIndicator.vue";
import RatingGroupRoot from "./RatingGroupRoot.vue";
import RatingGroupRootProvider from "./RatingGroupRootProvider.vue";

export const RatingGroup = {
  Context: RatingGroupContext,
  Control: RatingGroupControl,
  HiddenInput: RatingGroupHiddenInput,
  ItemContext: RatingGroupItemContext,
  ItemIndicator: RatingGroupItemIndicator,
  Item: RatingGroupItem,
  RootProvider: RatingGroupRootProvider,
  Root: RatingGroupRoot,
} as const;
