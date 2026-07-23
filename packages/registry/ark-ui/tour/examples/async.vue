<script setup lang="ts">
import { SparklesIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";

const steps: TourStepDetails[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Async Data Loading",
    description: "This tour demonstrates loading data before showing a step.",
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "user-info",
    type: "tooltip",
    title: "Loading...",
    description: "Fetching user data...",
    target: () => document.querySelector<HTMLElement>("#user-card"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
    effect({ show, update }) {
      const controller = new AbortController();

      fetch("https://api.github.com/users/segunadebayo", { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          update({
            title: `Welcome, ${data.name || data.login}!`,
            description: `You have ${data.public_repos} public repositories and ${data.followers} followers.`,
          });
          show();
        })
        .catch(() => {
          update({
            title: "User Profile",
            description: "Could not load user data. Please try again.",
          });
          show();
        });

      return () => controller.abort();
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete",
    description: "The async step loaded data from the GitHub API before displaying.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const tour = useTour({ steps });
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <Button variant="outline" @click="tour.start()">
      <SparklesIcon />
      Start Tour
    </Button>

    <div
      id="user-card"
      class="flex items-center justify-center rounded-md border border-border bg-popover px-8 py-4 text-sm font-medium text-foreground"
    >
      User Profile Card
    </div>

    <Tour.Root :tour="tour">
      <Teleport to="body">
        <Tour.Backdrop />
        <Tour.Spotlight />
        <Tour.Positioner>
          <Tour.Content>
            <Tour.Arrow>
              <Tour.ArrowTip />
            </Tour.Arrow>
            <Tour.CloseTrigger>
              <XIcon />
            </Tour.CloseTrigger>
            <Tour.ProgressText />
            <Tour.Title />
            <Tour.Description />
            <Tour.Control>
              <Tour.Actions v-slot="actions">
                <Tour.ActionTrigger
                  v-for="action in actions"
                  :key="action.label"
                  :action="action"
                />
              </Tour.Actions>
            </Tour.Control>
          </Tour.Content>
        </Tour.Positioner>
      </Teleport>
    </Tour.Root>
  </div>
</template>
