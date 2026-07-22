<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Timer } from "@vuzeno/registry/ui/timer";
import { PlayIcon, RotateCcwIcon } from "lucide-vue-next";
import { ref } from "vue";

const ticks = ref(0);

function handleComplete() {
  console.log("Timer completed");
}

function handleTick() {
  ticks.value += 1;
}
</script>

<template>
  <Timer.Root :target-ms="60 * 1000" @complete="handleComplete" @tick="handleTick">
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
      <Timer.ActionTrigger action="reset">
        <RotateCcwIcon />
        Reset
      </Timer.ActionTrigger>
    </Timer.Control>

    <output class="text-sm text-muted-foreground">Ticks: {{ ticks }}</output>
  </Timer.Root>
</template>
