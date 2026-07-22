<script setup lang="ts">
import { Timeline } from "@vuzeno/registry/ui/timeline";

type TimelineStep = {
  id: string;
  title: string;
  description: string;
};

const steps: TimelineStep[] = [
  { id: "draft", title: "Draft", description: "Idea captured" },
  { id: "design", title: "Design", description: "Specs approved" },
  { id: "build", title: "Build", description: "Implementation" },
  { id: "ship", title: "Ship", description: "Released to users" },
];
</script>

<template>
  <Timeline.Root direction="horizontal" class="mx-auto">
    <Timeline.Item v-for="step in steps" :key="step.id">
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>{{ step.title }}</Timeline.Title>
          <Timeline.Description>{{ step.description }}</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline.Root>
</template>
