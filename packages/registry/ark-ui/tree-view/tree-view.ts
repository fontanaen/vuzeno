import TreeViewBranch from "./TreeViewBranch.vue";
import TreeViewBranchContent from "./TreeViewBranchContent.vue";
import TreeViewBranchControl from "./TreeViewBranchControl.vue";
import TreeViewBranchIndentGuide from "./TreeViewBranchIndentGuide.vue";
import TreeViewBranchIndicator from "./TreeViewBranchIndicator.vue";
import TreeViewBranchText from "./TreeViewBranchText.vue";
import TreeViewBranchTrigger from "./TreeViewBranchTrigger.vue";
import TreeViewContext from "./TreeViewContext.vue";
import TreeViewItem from "./TreeViewItem.vue";
import TreeViewItemIndicator from "./TreeViewItemIndicator.vue";
import TreeViewItemText from "./TreeViewItemText.vue";
import TreeViewLabel from "./TreeViewLabel.vue";
import TreeViewNodeCheckbox from "./TreeViewNodeCheckbox.vue";
import TreeViewNodeCheckboxIndicator from "./TreeViewNodeCheckboxIndicator.vue";
import TreeViewNodeContext from "./TreeViewNodeContext.vue";
import TreeViewNodeProvider from "./TreeViewNodeProvider.vue";
import TreeViewNodeRenameInput from "./TreeViewNodeRenameInput.vue";
import TreeViewRoot from "./TreeViewRoot.vue";
import TreeViewRootProvider from "./TreeViewRootProvider.vue";
import TreeViewTree from "./TreeViewTree.vue";

export const TreeView = {
  BranchContent: TreeViewBranchContent,
  BranchControl: TreeViewBranchControl,
  BranchIndentGuide: TreeViewBranchIndentGuide,
  BranchIndicator: TreeViewBranchIndicator,
  BranchText: TreeViewBranchText,
  BranchTrigger: TreeViewBranchTrigger,
  Branch: TreeViewBranch,
  Context: TreeViewContext,
  ItemIndicator: TreeViewItemIndicator,
  ItemText: TreeViewItemText,
  Item: TreeViewItem,
  Label: TreeViewLabel,
  NodeCheckbox: TreeViewNodeCheckbox,
  NodeCheckboxIndicator: TreeViewNodeCheckboxIndicator,
  NodeRenameInput: TreeViewNodeRenameInput,
  NodeContext: TreeViewNodeContext,
  NodeProvider: TreeViewNodeProvider,
  RootProvider: TreeViewRootProvider,
  Root: TreeViewRoot,
  Tree: TreeViewTree,
} as const;
