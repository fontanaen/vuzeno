<script lang="ts">
export type StackMenuProps = {
  /**
   * Whether the menu stack is open.
   */
  open?: boolean;
};

export type StackMenuContextProps<P extends StackMenuProps> = {
  open: Ref<NonNullable<P["open"]>>;
  onSubMenuOpen: () => void;
  onSubMenuClose: () => void;
};

export const [provideStackMenuContext, useStackMenuContext] = createInjectionState((props: StackMenuContextProps<StackMenuProps>) => {
  const { open } = toRefs(props);

  const tree = ref<TreeItem[]>([]);

  const deepestSubMenuItems = ref<DeepestSubMenuItems | undefined>(undefined);

  watch(tree, (next) => {
    setTreeItemsDataAttributes(next);
    deepestSubMenuItems.value = deepestSubMenuItemsFromTree(next);
  });

  return {
    open,
    tree,
    buildTree,
    deepestSubMenuItems,
    onSubMenuOpen: props.onSubMenuOpen,
    onSubMenuClose: props.onSubMenuClose,
  };
});
</script>

<script setup lang="ts">
import { createInjectionState, whenever } from "@vueuse/core";
import { DialogRoot } from "reka-ui";
import { nextTick, ref, toRefs, watch, type HTMLAttributes, type Ref } from "vue";
import { setStackMenuItemsDataAttributes, buildTree, deepestSubMenuItemsFromTree, setTreeItemsDataAttributes, type DeepestSubMenuItems, type TreeItem } from "./utils";

const open = defineModel<boolean>("open", { default: false });

function rebuildMenuTree() {
  nextTick(() => {
    tree.value = buildTree(document.body);
  });
}

const { tree, buildTree } = provideStackMenuContext({ 
  open,
  onSubMenuOpen() {
    rebuildMenuTree();
  },
  onSubMenuClose() {
    rebuildMenuTree();
  },
});

whenever(() => open.value, async () => {
  await nextTick();
  setStackMenuItemsDataAttributes(document.body.querySelector("[data-slot='stack-menu-content']")!, 0);
  rebuildMenuTree();
});
</script>

<template>
  <DialogRoot v-model:open="open">
    <slot />
  </DialogRoot>
</template>