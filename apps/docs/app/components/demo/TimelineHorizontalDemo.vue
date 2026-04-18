<script setup lang="ts">
import { Timeline, TimelineContent, TimelineDescription, TimelineHeader, TimelineItem, TimelineMedia, TimelineTitle } from "@vuzeno/registry/ui/timeline";

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
  <Timeline direction="horizontal" class="mx-auto">
    <TimelineItem v-for="step in steps" :key="step.id">
      <TimelineMedia />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>{{ step.title }}</TimelineTitle>
          <TimelineDescription>{{ step.description }}</TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
