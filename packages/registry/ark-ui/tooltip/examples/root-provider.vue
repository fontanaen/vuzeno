<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tooltip, useTooltip } from "@vuzeno/registry/ui/tooltip";

const tooltip = useTooltip();
</script>

<template>
  <div class="flex items-center gap-4">
    <Button variant="outline" @click="tooltip.setOpen(true)">
      Open
    </Button>
    <Tooltip.RootProvider :value="tooltip">
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Content>I am a tooltip!</Tooltip.Content>
    </Tooltip.RootProvider>
  </div>
</template>
