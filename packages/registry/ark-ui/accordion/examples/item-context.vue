<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
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
  <Accordion.Root :default-value="['ark-ui']">
    <Accordion.Item v-for="item in items" :key="item.value" :value="item.value">
      <Accordion.ItemTrigger class="flex-col items-start gap-2">
        <span class="flex w-full items-center justify-between gap-2">
          {{ item.title }}
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </span>
        <Accordion.ItemContext v-slot="context">
          <span class="inline-flex gap-3 text-xs text-muted-foreground">
            <span>expanded: {{ context.expanded }}</span>
            <span>focused: {{ context.focused }}</span>
            <span>disabled: {{ context.disabled }}</span>
          </span>
        </Accordion.ItemContext>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>{{ item.content }}</Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
