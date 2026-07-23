<script setup lang="ts">
import { SparklesIcon, XIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Tour, type TourStepDetails, useTour } from "@vuzeno/registry/ui/tour";
import { ref } from "vue";

const steps: TourStepDetails[] = [
  {
    id: "step-1",
    type: "tooltip",
    title: "First Step",
    description: "Watch the event log below as you navigate.",
    target: () => document.querySelector<HTMLElement>("#event-1"),
    actions: [{ label: "Next", action: "next" }],
  },
  {
    id: "step-2",
    type: "tooltip",
    title: "Second Step",
    description: "Each step change triggers an event.",
    target: () => document.querySelector<HTMLElement>("#event-2"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Next", action: "next" },
    ],
  },
  {
    id: "step-3",
    type: "tooltip",
    title: "Final Step",
    description: "Complete the tour to see the status change.",
    target: () => document.querySelector<HTMLElement>("#event-3"),
    actions: [
      { label: "Back", action: "prev" },
      { label: "Finish", action: "dismiss" },
    ],
  },
];

const logs = ref<string[]>([]);

function addLog(message: string) {
  logs.value = [...logs.value, message];
}

const tour = useTour({
  steps,
  onStepChange(details) {
    addLog(`Step changed: ${details.stepId}`);
  },
  onStatusChange(details) {
    addLog(`Status: ${details.status}`);
  },
});
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
        :id="`event-${n}`"
        :key="n"
        class="flex items-center justify-center rounded-md border border-border bg-popover px-8 py-4 text-sm font-medium text-foreground"
      >
        Step {{ n }}
      </div>
    </div>

    <div class="flex h-[120px] w-full flex-col gap-1 self-stretch overflow-y-auto rounded-md border border-border bg-muted p-3 font-mono text-[13px]">
      <strong>Event Log:</strong>
      <div v-if="logs.length === 0" class="text-muted-foreground">
        Start the tour to see events
      </div>
      <div v-for="(log, i) in logs" v-else :key="i" class="text-muted-foreground">
        {{ log }}
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
