<script setup lang="ts">
import { PauseIcon, PlayIcon, RotateCcwIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { Timer, useTimer } from "@vuzeno/registry/ui/timer";

const timer = useTimer({ targetMs: 60 * 60 * 1000 });
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <output class="text-sm text-muted-foreground">timer: {{ JSON.stringify(timer.time) }}</output>

    <Timer.RootProvider :value="timer">
      <Timer.Area>
        <Timer.ItemGroup>
          <Timer.Item type="hours" />
          <Timer.ItemLabel>hours</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>:</Timer.Separator>
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
        <Timer.ActionTrigger action="resume">
          <PlayIcon />
          Resume
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
    </Timer.RootProvider>
  </div>
</template>
