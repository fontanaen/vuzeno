<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <Tooltip.Root :close-delay="0" :open-delay="0">
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Content>I am a tooltip!</Tooltip.Content>
  </Tooltip.Root>
</template>
