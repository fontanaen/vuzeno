<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";
import { SparklesIcon, XIcon } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "welcome",
    type: "dialog",
    title: "Welcome!",
    description: "This tour demonstrates different step types: dialog, tooltip, and floating.",
    actions: [{ label: "Start Tour", action: "next" }],
  },
  {
    id: "tooltip-step",
    type: "tooltip",
    title: "Tooltip Step",
    description: "This step appears as a tooltip anchored to a specific element.",
    target: () => document.querySelector<HTMLElement>("#target-element"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "floating-step",
    type: "floating",
    placement: "bottom-end",
    title: "Floating Step",
    description: "This step floats at a fixed position on the screen, independent of any target.",
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete!",
    description: "You have seen all the different step types available.",
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
      id="target-element"
      class="flex items-center justify-center rounded-md border border-border bg-popover px-8 py-4 text-sm font-medium text-foreground"
    >
      Target Element
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
