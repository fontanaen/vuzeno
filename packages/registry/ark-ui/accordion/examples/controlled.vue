<script setup lang="ts">
import { Accordion } from "@vuzeno/registry/ui/accordion";
import { ChevronDownIcon } from "lucide-vue-next";
import { ref } from "vue";

const value = ref<string[]>([]);

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
    <Accordion.Root v-model="value">
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

    <p class="text-sm text-muted-foreground">
      Value: {{ value.length ? value.join(", ") : "none" }}
    </p>
  </div>
</template>
