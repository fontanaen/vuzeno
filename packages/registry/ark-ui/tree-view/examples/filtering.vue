<script setup lang="ts">
import { useFilter } from "@ark-ui/vue/locale";
import { Input } from "@vuzeno/registry/ui/input";
import { TreeView } from "@vuzeno/registry/ui/tree-view";
import { shallowRef } from "vue";
import TreeNode from "./tree-node.vue";
import { createFileTreeCollection } from "./tree-view-data";

const initialCollection = createFileTreeCollection();
const filterFns = useFilter({ sensitivity: "base" });
const collection = shallowRef(initialCollection);

function filter(value: string) {
  collection.value = value.length > 0 ? initialCollection.filter((node) => filterFns.value.contains(node.name, value)) : initialCollection;
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <Input placeholder="Search" @input="(event) => filter((event.target as HTMLInputElement).value)" />
    <TreeView.Root :collection="collection">
      <TreeView.Tree>
        <TreeNode
          v-for="(node, index) in collection.rootNode.children"
          :key="node.id"
          :node="node"
          :index-path="[index]"
        />
      </TreeView.Tree>
    </TreeView.Root>
  </div>
</template>
