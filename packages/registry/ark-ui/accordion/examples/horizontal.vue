<script setup lang="ts">
import { Accordion } from "@vuzeno/registry/ui/accordion";

const items = [
  {
    value: "ark-ui",
    title: "What is Ark UI?",
    content: "A headless component library for building accessible web apps.",
  },
  {
    value: "getting-started",
    title: "How to get started?",
    content: "Install the package and import the components you need.",
  },
  {
    value: "maintainers",
    title: "Who maintains this project?",
    content: "Ark UI is maintained by the Chakra UI team.",
  },
];
</script>

<template>
  <Accordion.Root :default-value="['ark-ui']" orientation="horizontal">
    <Accordion.Item v-for="item in items" :key="item.value" :value="item.value" class="flex-1">
      <Accordion.ItemTrigger>
        {{ item.title }}
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <div class="flex h-full w-full items-center justify-center bg-muted p-5 text-center">
          {{ item.content }}
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
