<script setup lang="ts">
import { Timeline } from "@vuzeno/registry/ui/timeline";

type TimelineEvent = {
  id: string;
  side: "left" | "right";
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  { id: "kickoff", side: "left", title: "Project kickoff", description: "Monday · 9:00 AM" },
  { id: "review", side: "right", title: "Design review", description: "Tuesday · 2:30 PM" },
  { id: "planning", side: "left", title: "Sprint planning", description: "Wednesday · 10:00 AM" },
  { id: "release", side: "right", title: "Release", description: "Friday · 5:00 PM" },
];
</script>

<template>
  <Timeline.Root align="center" class="w-full max-w-md">
    <Timeline.Item v-for="event in events" :key="event.id" :side="event.side">
      <Timeline.Media />
      <Timeline.Content>
        <Timeline.Header>
          <Timeline.Title>{{ event.title }}</Timeline.Title>
          <Timeline.Description>{{ event.description }}</Timeline.Description>
        </Timeline.Header>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline.Root>
</template>
