<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";
import { MoreHorizontalIcon, SaveIcon, SparklesIcon, UploadIcon, XIcon } from "lucide-vue-next";

const steps: TourStepDetails[] = [
  {
    id: "welcome",
    type: "dialog",
    title: "Welcome to the App!",
    description: "Let's take a quick tour to get you started with the main features.",
    actions: [{ label: "Start Tour", action: "next" }],
  },
  {
    id: "upload",
    type: "tooltip",
    title: "Upload Files",
    description: "Click here to upload your files to the cloud.",
    target: () => document.querySelector<HTMLElement>("#btn-upload"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "save",
    type: "tooltip",
    title: "Save Changes",
    description: "Save your work to keep your progress.",
    target: () => document.querySelector<HTMLElement>("#btn-save"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "more",
    type: "tooltip",
    title: "More Options",
    description: "Access additional settings and actions from this menu.",
    target: () => document.querySelector<HTMLElement>("#btn-more"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "complete",
    type: "dialog",
    title: "You're all set!",
    description: "You now know the basics. Enjoy using the app!",
    actions: [{ label: "Finish", action: "dismiss" }],
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
      <Button id="btn-upload" variant="outline">
        <UploadIcon />
        Upload
      </Button>
      <Button id="btn-save" variant="outline">
        <SaveIcon />
        Save
      </Button>
      <Button id="btn-more" variant="outline">
        <MoreHorizontalIcon />
        More
      </Button>
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
