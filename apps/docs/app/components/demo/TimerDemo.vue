<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Timer } from "@vuzeno/registry/ui/timer";
import { PauseIcon, PlayIcon } from "lucide-vue-next";
</script>

<template>
  <Timer.Root :target-ms="60 * 60 * 1000" :start-ms="40 * 60 * 1000">
    <Timer.Area>
      <Timer.ItemGroup>
        <Timer.Item type="days" />
        <Timer.ItemLabel>days</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator>:</Timer.Separator>
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
        Play
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="resume">
        <PlayIcon />
        Resume
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="pause">
        <PauseIcon />
        Pause
      </Timer.ActionTrigger>
    </Timer.Control>
  </Timer.Root>
</template>
