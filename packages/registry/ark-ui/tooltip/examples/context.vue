<script setup lang="ts">
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
</script>

<template>
  <Tooltip.Root>
    <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
    <Tooltip.Context v-slot="tooltip">
      <Tooltip.Content>
        This tooltip is open: {{ tooltip.open.toString() }}
      </Tooltip.Content>
    </Tooltip.Context>
  </Tooltip.Root>
</template>
