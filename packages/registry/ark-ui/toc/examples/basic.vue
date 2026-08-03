<script setup lang="ts">
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { Toc } from "@vuzeno/registry/ui/toc";
import { ref } from "vue";

const active = ref("rounded-1");

const sections = [
  { value: "rounded-1", title: "Item 1", depth: 2, body: "Rounded mode draws a rail that follows nested depths with soft S-curve turns." },
  { value: "rounded-2", title: "Item 2", depth: 2, body: "Parent sections stay on the outer rail until nested items begin." },
  { value: "rounded-2-1", title: "Item 2.1", depth: 3, body: "Nested items pull the rail inward through a smooth curve." },
  { value: "rounded-2-2", title: "Item 2.2", depth: 3, body: "The active indicator is a primary segment that rides the same curved path." },
  { value: "rounded-2-3", title: "Item 2.3", depth: 3, body: "When nesting ends, the rail curves back out to the outer depth." },
  { value: "rounded-3", title: "Item 3", depth: 2, body: "Top-level items share the outer vertical segment again." },
  { value: "rounded-4", title: "Item 4", depth: 2, body: 'Use turn="rounded" for the soft circuit style.' },
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
      turn="rounded"
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
