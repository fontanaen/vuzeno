<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { JsonTreeView, useJsonTreeView } from "@vuzeno/registry/ui/json-tree-view";

const jsonTreeView = useJsonTreeView({
  defaultExpandedDepth: 1,
  data: {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    tags: ["tag1", "tag2", "tag3"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
});
</script>

<template>
  <JsonTreeView.RootProvider :value="jsonTreeView">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.RootProvider>
</template>
