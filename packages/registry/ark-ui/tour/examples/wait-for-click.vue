<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour, waitForEvent } from "@vuzeno/registry/ui/tour";
import { SparklesIcon, XIcon } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Interactive Tutorial",
    description: "This tour will guide you through actions. You must complete each step to proceed.",
    actions: [{ label: "Begin", action: "next" }],
  },
  {
    id: "click-add",
    type: "tooltip",
    title: "Click the Add Button",
    description: 'Click the "Add Item" button to continue.',
    target: () => document.querySelector<HTMLElement>("#btn-add"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "click-edit",
    type: "tooltip",
    title: "Click the Edit Button",
    description: 'Now click the "Edit" button.',
    target: () => document.querySelector<HTMLElement>("#btn-edit"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "click-delete",
    type: "tooltip",
    title: "Click the Delete Button",
    description: 'Finally, click the "Delete" button.',
    target: () => document.querySelector<HTMLElement>("#btn-delete"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Well Done!",
    description: "You completed all the interactive steps.",
    actions: [{ label: "Finish", action: "dismiss" }],
  },
];

const tour = useTour({ steps });
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <Button variant="outline" @click="tour.start()">
      <SparklesIcon />
      Start Interactive Tour
    </Button>

    <div class="flex flex-wrap gap-2">
      <Button id="btn-add" variant="outline">Add Item</Button>
      <Button id="btn-edit" variant="outline">Edit</Button>
      <Button id="btn-delete" variant="outline">Delete</Button>
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
