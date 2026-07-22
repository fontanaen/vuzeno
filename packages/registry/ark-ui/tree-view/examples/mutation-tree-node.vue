<script setup lang="ts">
import { TreeView, useTreeViewContext } from "@vuzeno/registry/ui/tree-view";
import { ChevronRight, Plus, Trash } from "lucide-vue-next";
import type { FileTreeNode } from "./tree-view-data";

const props = defineProps<{
  node: FileTreeNode;
  indexPath: number[];
}>();

const emit = defineEmits<{
  (e: "remove", payload: { node: FileTreeNode; indexPath: number[] }): void;
  (e: "add", payload: { node: FileTreeNode; indexPath: number[] }): void;
}>();

const tree = useTreeViewContext();
const nodeState = tree.value.getNodeState(props);
</script>

<template>
  <TreeView.NodeProvider :node="node" :index-path="indexPath">
    <template v-if="nodeState.isBranch">
      <TreeView.Branch>
        <TreeView.BranchControl>
          <TreeView.BranchIndicator>
            <ChevronRight />
          </TreeView.BranchIndicator>
          <TreeView.BranchText>{{ node.name }}</TreeView.BranchText>
          <div
            class="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover/row:opacity-100 group-focus-within/row:opacity-100"
          >
            <button
              type="button"
              class="inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border-none bg-transparent p-0 text-foreground [&_svg]:size-3.5"
              @click.stop="emit('remove', { node, indexPath })"
            >
              <Trash />
            </button>
            <button
              type="button"
              class="inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border-none bg-transparent p-0 text-foreground [&_svg]:size-3.5"
              @click.stop="emit('add', { node, indexPath }); tree.expand([node.id])"
            >
              <Plus />
            </button>
          </div>
        </TreeView.BranchControl>
        <TreeView.BranchContent>
          <TreeView.BranchIndentGuide />
          <MutationTreeNode
            v-for="(child, index) in node.children"
            :key="child.id"
            :node="child"
            :index-path="[...indexPath, index]"
            @remove="emit('remove', $event)"
            @add="emit('add', $event)"
          />
        </TreeView.BranchContent>
      </TreeView.Branch>
    </template>
    <template v-else>
      <TreeView.Item>
        <TreeView.ItemText>{{ node.name }}</TreeView.ItemText>
        <div
          class="flex shrink-0 gap-1 opacity-0 transition-opacity group-hover/row:opacity-100 group-focus-within/row:opacity-100"
        >
          <button
            type="button"
            class="inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border-none bg-transparent p-0 text-foreground [&_svg]:size-3.5"
            @click.stop="emit('remove', { node, indexPath })"
          >
            <Trash />
          </button>
        </div>
      </TreeView.Item>
    </template>
  </TreeView.NodeProvider>
</template>
