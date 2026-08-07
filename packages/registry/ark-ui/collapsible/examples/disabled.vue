<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
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
