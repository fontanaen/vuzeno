<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";
import { KeyboardIcon, SparklesIcon, XIcon } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "Keyboard Navigation",
    description: "Press the right arrow key to go to the next step.",
    target: () => document.querySelector<HTMLElement>("#key-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Go Back",
    description: "Press the left arrow key to go back.",
    target: () => document.querySelector<HTMLElement>("#key-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Close Tour",
    description: "Press Escape to close the tour at any time.",
    target: () => document.querySelector<HTMLElement>("#key-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const tour = useTour({ steps, keyboardNavigation: true });
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <Button variant="outline" @click="tour.start()">
      <SparklesIcon />
      Start Tour
    </Button>

    <p class="flex items-center gap-2 text-sm text-muted-foreground [&_svg]:size-4">
      <KeyboardIcon />
      Use arrow keys to navigate, Escape to close
    </p>

    <div class="flex flex-wrap gap-2">
      <div
        v-for="n in 3"
        :id="`key-${n}`"
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
          </Tour.Content>
        </Tour.Positioner>
      </Teleport>
    </Tour.Root>
  </div>
</template>
