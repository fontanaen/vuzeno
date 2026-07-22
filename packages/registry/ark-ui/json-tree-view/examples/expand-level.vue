<script setup lang="ts">
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";
import { ChevronRightIcon } from "lucide-vue-next";

const data = {
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
};
</script>

<template>
  <JsonTreeView.Root :default-expanded-depth="2" :data="data">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
