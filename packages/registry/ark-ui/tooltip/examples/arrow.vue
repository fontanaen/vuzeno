<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Content>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      I am a tooltip!
    </Tooltip.Content>
  </Tooltip.Root>
</template>
