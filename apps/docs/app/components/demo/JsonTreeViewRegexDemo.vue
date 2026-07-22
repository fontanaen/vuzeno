<script setup lang="ts">
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";
import { ChevronRightIcon } from "lucide-vue-next";

const data = {
  regex: /^[a-z0-9]+/g,
  case_insensitive: /^(?:[a-z0-9]+)foo.*?/i,
};
</script>

<template>
  <JsonTreeView.Root :default-expanded-depth="1" :data="data">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
