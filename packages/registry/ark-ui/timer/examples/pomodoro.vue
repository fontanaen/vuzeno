<script setup lang="ts">
import { PauseIcon, PlayIcon, RotateCcwIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Timer } from "@vuzeno/registry/ui/timer";
import { ref } from "vue";

const isWorking = ref(true);
const cycles = ref(0);

function handleComplete() {
  isWorking.value = !isWorking.value;
  if (!isWorking.value) {
    cycles.value += 1;
  }
}
</script>

<template>
  <Timer.Root
    :start-ms="isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000"
    countdown
    @complete="handleComplete"
  >
    <h2 class="text-sm font-medium">
      {{ isWorking ? "Work Session" : "Break Session" }}
    </h2>

    <Timer.Area>
      <Timer.ItemGroup>
        <Timer.Item type="minutes" />
        <Timer.ItemLabel>minutes</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator>:</Timer.Separator>
      <Timer.ItemGroup>
        <Timer.Item type="seconds" />
        <Timer.ItemLabel>seconds</Timer.ItemLabel>
      </Timer.ItemGroup>
    </Timer.Area>

    <Timer.Control>
      <Timer.ActionTrigger action="start">
        <PlayIcon />
        Start
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="pause">
        <PauseIcon />
        Pause
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="reset">
        <RotateCcwIcon />
        Reset
      </Timer.ActionTrigger>
    </Timer.Control>

    <output class="text-sm text-muted-foreground">Completed cycles: {{ cycles }}</output>
  </Timer.Root>
</template>
