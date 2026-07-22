import ToggleGroupContext from "./ToggleGroupContext.vue";
import ToggleGroupItem from "./ToggleGroupItem.vue";
import ToggleGroupRoot from "./ToggleGroupRoot.vue";
import ToggleGroupRootProvider from "./ToggleGroupRootProvider.vue";

export const ToggleGroup = {
  Context: ToggleGroupContext,
  Item: ToggleGroupItem,
  RootProvider: ToggleGroupRootProvider,
  Root: ToggleGroupRoot,
} as const;
