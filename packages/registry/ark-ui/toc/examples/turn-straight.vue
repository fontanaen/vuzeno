<script setup lang="ts">
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { Toc } from "@vuzeno/registry/ui/toc";
import { ref } from "vue";

const active = ref("overview");

const sections = [
  { value: "overview", title: "Overview", depth: 2, body: "Straight mode keeps a continuous vertical rail." },
  { value: "setup", title: "Setup", depth: 2, body: "The active item is highlighted as a primary segment on that line." },
  { value: "depth", title: "Nested note", depth: 3, body: "Depth still indents labels; the rail itself stays continuous." },
  { value: "finish", title: "Finish", depth: 2, body: 'Use turn="straight" when you want a simple track without path elbows.' },
];
</script>

<template>
  <ScrollSpy.Root
    v-model="active"
    class="flex w-full max-w-2xl gap-6"
  >
    <ScrollSpy.Viewport class="border-border h-72 min-w-0 flex-1 overflow-y-auto rounded-lg border">
      <ScrollSpy.Item
        v-for="section in sections"
        :key="section.value"
        :value="section.value"
        class="space-y-2 p-4"
      >
        <h3
          :id="section.value"
          class="text-base font-semibold"
        >
          {{ section.title }}
        </h3>
        <p class="text-muted-foreground text-sm leading-relaxed">
          {{ section.body }}
        </p>
        <div class="bg-muted aspect-video rounded-md" />
      </ScrollSpy.Item>
    </ScrollSpy.Viewport>

    <Toc.Root
      turn="straight"
      indicator="segment"
      class="w-44 shrink-0"
    >
      <Toc.Title>On this page</Toc.Title>
      <Toc.List>
        <Toc.Indicator />
        <Toc.Item
          v-for="section in sections"
          :key="section.value"
          :value="section.value"
          :depth="section.depth"
        >
          <Toc.Link :href="`#${section.value}`">
            {{ section.title }}
          </Toc.Link>
        </Toc.Item>
      </Toc.List>
    </Toc.Root>
  </ScrollSpy.Root>
</template>
