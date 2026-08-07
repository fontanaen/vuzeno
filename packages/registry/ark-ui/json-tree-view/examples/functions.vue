<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";

const data = [
  function sum(a: number, b: number) {
    return a + b;
  },
  async (promises: Promise<unknown>[]) => await Promise.all(promises),
  function* generator(a: number) {
    while (a > 0) {
      yield a - 1;
    }
  },
];
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
