<script setup lang="ts">
import { ScrollSpy } from "@vuzeno/registry/ui/scroll-spy";
import { ref } from "vue";

const active = ref("intro");

const sections = [
  { value: "intro", title: "Intro", body: "ScrollSpy watches registered sections and updates the active value as they enter view." },
  { value: "usage", title: "Usage", body: "Wrap the scroll container in ScrollSpy.Viewport and each section in ScrollSpy.Item." },
  { value: "api", title: "API", body: "Control the active section with v-model, or read it from context when composing custom UI." },
  { value: "notes", title: "Notes", body: "Active tracking uses scroll position against an offset threshold, so tall sections stay reliable." },
];
</script>

<template>
  <ScrollSpy.Root
    v-model="active"
    class="w-full max-w-lg"
  >
    <p class="text-muted-foreground mb-3 text-xs">
      Active: <span class="text-foreground font-medium">{{ active }}</span>
    </p>
    <ScrollSpy.Viewport class="border-border h-72 overflow-y-auto rounded-lg border">
      <ScrollSpy.Item
        v-for="section in sections"
        :key="section.value"
        :value="section.value"
        class="flex flex-col gap-2 p-4"
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
  </ScrollSpy.Root>
</template>
