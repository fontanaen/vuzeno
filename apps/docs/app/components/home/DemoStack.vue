<script setup lang="ts">
import { ArrowUpRightIcon } from "@lucide/vue";
import { Card } from "@vuzeno/registry/ui/card";
import DemoCaseInvite from "./DemoCaseInvite.vue";
import DemoCasePayment from "./DemoCasePayment.vue";
import DemoCaseSchedule from "./DemoCaseSchedule.vue";
import DemoCaseTriage from "./DemoCaseTriage.vue";
import DemoCaseVerify from "./DemoCaseVerify.vue";

const cases = [
  {
    id: "invite",
    title: "Invite your team",
    description: "Search people across teams, pick their access level, send.",
    demo: DemoCaseInvite,
    components: ["autocomplete", "avatar", "select"],
  },
  {
    id: "schedule",
    title: "Book a call",
    description: "Duration drives the slot grid, the calendar blocks past days, and the summary follows along.",
    demo: DemoCaseSchedule,
    components: ["date-picker", "segment-group", "button"],
  },
  {
    id: "verify",
    title: "Verify a number",
    description: "Country detection and formatting, then a one-time code that verifies as soon as it completes.",
    demo: DemoCaseVerify,
    components: ["phone-field", "pin-input", "steps"],
  },
  {
    id: "triage",
    title: "Triage issues",
    description: "Typed operators for text, status, priority, and assignee — the list narrows as you build the query.",
    demo: DemoCaseTriage,
    components: ["filters", "badge", "avatar"],
  },
];

function componentLabel(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
</script>

<template>
  <div class="flex w-full min-w-0 flex-col gap-5" aria-label="Interactive component demos">
    <Card.Root v-for="(demoCase, index) in cases" :key="demoCase.id" class="min-w-0">
      <Card.Header>
        <Card.Title>{{ demoCase.title }}</Card.Title>
        <Card.Description>{{ demoCase.description }}</Card.Description>
      </Card.Header>

      <Card.Content>
        <component :is="demoCase.demo" />
      </Card.Content>

      <Card.Footer class="flex-wrap gap-x-3 gap-y-1 justify-end">
        <NuxtLink
          v-for="name in demoCase.components"
          :key="name"
          :to="`/docs/components/${name}`"
          class="group inline-flex items-center gap-0.5 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          {{ componentLabel(name) }}
          <ArrowUpRightIcon class="size-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
        </NuxtLink>
      </Card.Footer>
    </Card.Root>
  </div>
</template>
