<script setup lang="ts">
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
import type { TocIndicatorMode, TocTurn } from "@vuzeno/registry/ui/toc";
import { Toc } from "@vuzeno/registry/ui/toc";
import { ref } from "vue";

const active = ref("fill-1");
const indicator = ref<TocIndicatorMode>("fill");
const turn = ref<TocTurn>("rounded");

const sections = [
  { value: "fill-1", title: "Item 1", depth: 2, body: "Fill mode paints the rail from the top down to the active item." },
  { value: "fill-2", title: "Item 2", depth: 2, body: "Segment mode keeps a short primary mark next to the current link only." },
  { value: "fill-2-1", title: "Item 2.1", depth: 3, body: "Nested depths still bend the rail; fill follows those turns as progress." },
  { value: "fill-2-2", title: "Item 2.2", depth: 3, body: "Scroll or click links to watch the indicator grow along the circuit." },
  { value: "fill-2-3", title: "Item 2.3", depth: 3, body: "When nesting ends, the filled path angles or curves back out." },
  { value: "fill-3", title: "Item 3", depth: 2, body: "Toggle turn and indicator above to compare the two highlight behaviors." },
  { value: "fill-3-1", title: "Item 3.1", depth: 3, body: "Nested depths still bend the rail; fill follows those turns as progress." },
  { value: "fill-4", title: "Item 4", depth: 2, body: "Fill is great for reading progress; segment is better as a current-position pin." },
];
</script>

<template>
  <div class="flex w-full max-w-2xl flex-col gap-4">
    <div class="flex flex-wrap gap-3">
      <SegmentGroup.Root
        v-model="indicator"
        class="w-auto"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item
          value="segment"
          class="text-xs"
        >
          segment
        </SegmentGroup.Item>
        <SegmentGroup.Item
          value="fill"
          class="text-xs"
        >
          fill
        </SegmentGroup.Item>
      </SegmentGroup.Root>

      <SegmentGroup.Root
        v-model="turn"
        class="w-auto"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item
          value="rounded"
          class="text-xs"
        >
          rounded
        </SegmentGroup.Item>
        <SegmentGroup.Item
          value="sharp"
          class="text-xs"
        >
          sharp
        </SegmentGroup.Item>
        <SegmentGroup.Item
          value="straight"
          class="text-xs"
        >
          straight
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </div>

    <ScrollSpy.Root
      v-model="active"
      class="flex w-full gap-6"
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
        :turn="turn"
        :indicator="indicator"
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
  </div>
</template>
