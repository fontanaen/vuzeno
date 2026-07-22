<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";
import { SparklesIcon, XIcon } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "First Feature",
    description: "You can skip this tour at any time using the Skip button.",
    target: () => document.querySelector<HTMLElement>("#item-1"),
    actions: [
      { label: "Skip", action: "dismiss" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Second Feature",
    description: "Continue or skip to end the tour early.",
    target: () => document.querySelector<HTMLElement>("#item-2"),
    actions: [
      { label: "Skip", action: "dismiss" },
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Final Feature",
    description: "This is the last step of the tour.",
    target: () => document.querySelector<HTMLElement>("#item-3"),
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
        v-for="n in 3"
        :id="`item-${n}`"
        :key="n"
        class="flex items-center justify-center rounded-md border border-border bg-popover px-8 py-4 text-sm font-medium text-foreground"
      >
        Item {{ n }}
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
          </Tour.Content>
        </Tour.Positioner>
      </Teleport>
    </Tour.Root>
  </div>
</template>
