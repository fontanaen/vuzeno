<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";

const data = new Map<string, unknown>([
  ["name", "ark-ui-json-tree"],
  ["license", "MIT"],
  ["elements", new Set(["ark-ui", 123, false, true, null, undefined, 456n])],
  [
    "nested",
    new Map<string, unknown>([
      [
        "taglines",
        new Set([
          { name: "ark-ui", feature: "headless components" },
          { name: "ark-ui", feature: "framework agnostic" },
          { name: "ark-ui", feature: "accessible by default" },
        ]),
      ],
    ]),
  ],
]);
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
