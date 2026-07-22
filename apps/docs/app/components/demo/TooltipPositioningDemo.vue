<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <Tooltip.Root
    :positioning="{
      placement: 'left-start',
      offset: { mainAxis: 12, crossAxis: 12 },
    }"
  >
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Content>I am a tooltip!</Tooltip.Content>
  </Tooltip.Root>
</template>
