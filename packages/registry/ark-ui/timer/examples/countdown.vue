<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Timer } from "@vuzeno/registry/ui/timer";
import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-vue-next";
</script>

<template>
  <Timer.Root countdown :start-ms="5 * 60 * 1000">
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
  </Timer.Root>
</template>
