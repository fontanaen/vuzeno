<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour, waitForElement, waitForEvent } from "@vuzeno/registry/ui/tour";
import { PlusIcon, SparklesIcon, XIcon } from "lucide-vue-next";
import { ref } from "vue";

const steps: TourStepDetails[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Dynamic Elements",
    description: "This tour demonstrates waiting for elements that appear dynamically.",
    actions: [{ label: "Start", action: "next" }],
  },
  {
    id: "add-item",
    type: "tooltip",
    title: "Add an Item",
    description: "Click the button to add a new item to the list.",
    target: () => document.querySelector<HTMLElement>("#btn-add-item"),
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
  },
  {
    id: "new-item",
    type: "tooltip",
    title: "New Item Added!",
    description: "The tour waited for this element to appear before showing this step.",
    target: () => document.querySelector<HTMLElement>('[data-item="new"]'),
    effect({ show }) {
      const [promise, cancel] = waitForElement(() => document.querySelector<HTMLElement>('[data-item="new"]'), {
        timeout: 5000,
      });
      promise.then(() => show());
      return () => cancel();
    },
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "complete",
    type: "dialog",
    title: "Tour Complete",
    description: "You learned how to use waitForElement for dynamic content.",
    actions: [{ label: "Done", action: "dismiss" }],
  },
];

const tour = useTour({ steps });
const items = ref<string[]>(["Item 1", "Item 2"]);

function addItem() {
  items.value = [...items.value, `Item ${items.value.length + 1}`];
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <Button variant="outline" @click="tour.start()">
      <SparklesIcon />
      Start Tour
    </Button>

    <Button id="btn-add-item" variant="outline" @click="addItem">
      <PlusIcon />
      Add Item
    </Button>

    <div class="flex w-full flex-col gap-2 self-stretch">
      <div
        v-for="(item, index) in items"
        :key="item"
        class="rounded-md border border-border bg-popover px-4 py-3 text-sm text-foreground data-[item=new]:border-primary data-[item=new]:bg-primary/10"
        :data-item="index === items.length - 1 && items.length > 2 ? 'new' : undefined"
      >
        {{ item }}
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
