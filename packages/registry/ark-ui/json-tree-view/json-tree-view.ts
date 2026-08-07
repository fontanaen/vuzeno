import JsonTreeViewRoot from "./JsonTreeViewRoot.vue";
import JsonTreeViewRootProvider from "./JsonTreeViewRootProvider.vue";
import JsonTreeViewTree from "./JsonTreeViewTree.vue";

export const JsonTreeView = {
  Root: JsonTreeViewRoot,
  RootProvider: JsonTreeViewRootProvider,
  Tree: JsonTreeViewTree,
} as const;
