<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";

const data = new Error("Error");
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
