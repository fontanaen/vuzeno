<script setup lang="ts">
import { Timeline, TimelineContent, TimelineDescription, TimelineHeader, TimelineItem, TimelineMedia, TimelineTitle } from "@vuzeno/registry/ui/timeline";

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
  <Timeline align="center" class="w-full max-w-md">
    <TimelineItem v-for="event in events" :key="event.id" :side="event.side">
      <TimelineMedia />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>{{ event.title }}</TimelineTitle>
          <TimelineDescription>{{ event.description }}</TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
</template>
