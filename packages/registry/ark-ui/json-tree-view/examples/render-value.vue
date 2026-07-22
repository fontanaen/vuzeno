<script setup lang="ts">
import { JsonTreeView } from "@vuzeno/registry/ui/json-tree-view";
import { ChevronRightIcon } from "lucide-vue-next";

const data = {
  name: "John Doe",
  age: 30,
  number: Number.NaN,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

function stripQuotes(value: string) {
  return value.replace(/^"(.*)"$/, "$1");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stripQuotes(value));
}
</script>

<template>
  <JsonTreeView.Root :default-expanded-depth="2" :data="data">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
      <template #renderValue="{ node }">
        <a
          v-if="node.type === 'text' && typeof node.value === 'string' && isEmail(node.value)"
          :href="`mailto:${stripQuotes(node.value)}`"
          class="text-(--json-string) underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          {{ node.value }}
        </a>
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
