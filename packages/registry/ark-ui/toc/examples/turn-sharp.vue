<script setup lang="ts">
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { Toc } from "@vuzeno/registry/ui/toc";
import { ref } from "vue";

const active = ref("sharp-1");

const sections = [
  { value: "sharp-1", title: "Item 1", depth: 2, body: "Sharp mode draws a path with straight 45° diagonal turns between depths." },
  { value: "sharp-2", title: "Item 2", depth: 2, body: "Parent sections stay on the outer rail until nested items begin." },
  { value: "sharp-2-1", title: "Item 2.1", depth: 3, body: "Nested items pull the rail inward with a cassant diagonal." },
  { value: "sharp-2-2", title: "Item 2.2", depth: 3, body: "The active indicator is a primary segment that rides the same angled path." },
  { value: "sharp-2-3", title: "Item 2.3", depth: 3, body: "When nesting ends, the rail angles back out to the outer depth." },
  { value: "sharp-3", title: "Item 3", depth: 2, body: "Top-level items share the outer vertical segment again." },
  { value: "sharp-4", title: "Item 4", depth: 2, body: 'Use turn="sharp" for the angular circuit style.' },
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
      turn="sharp"
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
