<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";

const testArray = [1, 2, 3, 4, 5];
Object.defineProperties(testArray, {
  customProperty: { value: "custom value", enumerable: false, writable: false },
  anotherProperty: { value: 42, enumerable: false, writable: false },
});

const data = {
  normalArray: [1, 2, 3],
  arrayWithNonEnumerableProperties: testArray,
  sparseArray: (() => {
    const sparse: unknown[] = [];
    sparse[0] = "first";
    sparse[5] = "sixth";
    return sparse;
  })(),
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
