<script setup lang="ts">
import { SparklesIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";

const steps: TourStepDetails[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "Progress Tracking",
    description: "Watch the progress bar at the bottom as you navigate.",
    target: () => document.querySelector<HTMLElement>("#progress-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Halfway There",
    description: "The progress bar shows how far along you are.",
    target: () => document.querySelector<HTMLElement>("#progress-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Almost Done",
    description: "One more step to complete the tour.",
    target: () => document.querySelector<HTMLElement>("#progress-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-4",
    type: "tooltip",
    title: "Complete!",
    description: "You have completed all the steps.",
    target: () => document.querySelector<HTMLElement>("#progress-4"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
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

    <div class="flex flex-wrap gap-2">
      <div
        v-for="n in 4"
        :id="`progress-${n}`"
        :key="n"
        class="flex items-center justify-center rounded-md border border-border bg-popover px-8 py-4 text-sm font-medium text-foreground"
      >
        Step {{ n }}
      </div>
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
            <div class="absolute right-0 bottom-0 left-0 h-1 overflow-hidden rounded-b-md bg-muted">
              <div
                class="h-full bg-primary transition-[width] duration-200 ease-out"
                :style="{ width: `${tour.getProgressPercent()}%` }"
              />
            </div>
          </Tour.Content>
        </Tour.Positioner>
      </Teleport>
    </Tour.Root>
  </div>
</template>
