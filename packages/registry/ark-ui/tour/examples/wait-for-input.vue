<script setup lang="ts">
import { SparklesIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Field } from "@vuzeno/registry/ui/field";
import { Tour, type TourStepDetails, useTour, waitForEvent } from "@vuzeno/registry/ui/tour";

const steps: TourStepDetails[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Form Tutorial",
    description: "Learn how to fill out the form by following the guided steps.",
    actions: [{ label: "Start", action: "next" }],
  },
  {
    id: "enter-name",
    type: "tooltip",
    title: "Enter Your Name",
    description: "Type your name in the input field to continue.",
    target: () => document.querySelector<HTMLInputElement>("#input-name"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "input", {
        predicate: (el) => el.value.trim().length >= 2,
      });
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "enter-email",
    type: "tooltip",
    title: "Enter Your Email",
    description: "Now enter a valid email address.",
    target: () => document.querySelector<HTMLInputElement>("#input-email"),
    effect({ next, target, show }) {
      show();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "input", {
        predicate: (el) => emailRegex.test(el.value),
      });
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "check-terms",
    type: "tooltip",
    title: "Accept Terms",
    description: "Check the checkbox to accept the terms.",
    target: () => document.querySelector<HTMLInputElement>("#checkbox-terms"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent<HTMLInputElement>(target, "change", {
        predicate: (el) => el.checked,
      });
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "complete",
    type: "dialog",
    title: "Form Complete!",
    description: "You have successfully filled out the form.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const tour = useTour({ steps });
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <Button variant="outline" @click="tour.start()">
      <SparklesIcon />
      Start Form Tutorial
    </Button>

    <div class="flex max-w-xs flex-col gap-4 rounded-lg border border-border bg-popover p-4">
      <Field.Root class="flex flex-col gap-1">
        <Field.Label for="input-name">Name</Field.Label>
        <Field.Input id="input-name" type="text" placeholder="Enter your name" />
      </Field.Root>
      <Field.Root class="flex flex-col gap-1">
        <Field.Label for="input-email">Email</Field.Label>
        <Field.Input id="input-email" type="email" placeholder="Enter your email" />
      </Field.Root>
      <div class="flex items-center gap-2">
        <input id="checkbox-terms" type="checkbox" class="size-4 accent-primary">
        <Label for="checkbox-terms" class="text-sm text-muted-foreground">
          I accept the terms and conditions
        </Label>
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
