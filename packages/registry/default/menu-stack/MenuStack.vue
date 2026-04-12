<script lang="ts">
export type MenuStackProps = {
  /**
   * Whether the menu stack is open.
   */
  open?: boolean;
};

export type MenuStackContextProps<P extends MenuStackProps> = {
  open: Ref<NonNullable<P["open"]>>;
  onSubMenuOpen: () => void;
  onSubMenuClose: () => void;
};

export const [provideMenuStackContext, useMenuStackContext] = createInjectionState((props: MenuStackContextProps<MenuStackProps>) => {
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
import { setMenuStackItemsDataAttributes, buildTree, deepestSubMenuItemsFromTree, setTreeItemsDataAttributes, type DeepestSubMenuItems, type TreeItem } from "./utils";

const open = defineModel<boolean>("open", { default: false });

function rebuildMenuTree() {
  nextTick(() => {
    tree.value = buildTree(document.body);
  });
}

const { tree, buildTree } = provideMenuStackContext({ 
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
  setMenuStackItemsDataAttributes(document.body.querySelector("[data-slot='menu-stack-content']")!, 0);
  rebuildMenuTree();
});
</script>

<template>
  <DialogRoot v-model:open="open">
    <slot />
  </DialogRoot>
</template>