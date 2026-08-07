<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Tooltip } from "@vuzeno/registry/ui/tooltip";
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <div class="flex items-center gap-4">
    <Button variant="outline" @click="open = !open">
      Toggle
    </Button>
    <Tooltip.Root v-model:open="open">
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Content>I am a tooltip!</Tooltip.Content>
    </Tooltip.Root>
  </div>
</template>
