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
  <div class="flex flex-col gap-3">
    <Accordion.Root :default-value="['ark-ui']">
      <Accordion.Context v-slot="context">
        <output class="mb-4 flex flex-col gap-2 border border-border p-2 text-sm text-muted-foreground">
          <div>value: {{ JSON.stringify(context.value) }}</div>
          <div>focusedValue: {{ context.focusedValue ?? "null" }}</div>
        </output>
      </Accordion.Context>

      <Accordion.Item v-for="item in items" :key="item.value" :value="item.value">
        <Accordion.ItemTrigger>
          {{ item.title }}
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>{{ item.content }}</Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </div>
</template>
