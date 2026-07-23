<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { Accordion, useAccordion } from "@vuzeno/registry/ui/accordion";
import { Button } from "@vuzeno/registry/ui/button";

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

const accordion = useAccordion({
  multiple: true,
  defaultValue: ["ark-ui"],
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-sm text-muted-foreground">
      Value: {{ accordion.value.length ? accordion.value.join(", ") : "none" }}
    </p>

    <Accordion.RootProvider :value="accordion">
      <Accordion.Item v-for="item in items" :key="item.value" :value="item.value">
        <Accordion.ItemTrigger>
          {{ item.title }}
          <Accordion.ItemIndicator>
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>{{ item.content }}</Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.RootProvider>

    <div class="flex items-center gap-2">
      <Button size="sm" variant="outline" @click="accordion.setValue(['ark-ui'])">
        Expand Ark UI
      </Button>
      <Button size="sm" variant="outline" @click="accordion.setValue(items.map((item) => item.value))">
        Expand all
      </Button>
      <Button size="sm" variant="outline" @click="accordion.setValue([])">
        Collapse all
      </Button>
    </div>
  </div>
</template>
