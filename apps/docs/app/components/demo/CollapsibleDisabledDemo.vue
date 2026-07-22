<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { ChevronRightIcon } from "lucide-vue-next";
</script>

<template>
  <Collapsible.Root disabled>
    <Collapsible.Trigger>
      System Requirements
      <Collapsible.Indicator>
        <ChevronRightIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body>This section is currently unavailable.</Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
</template>
