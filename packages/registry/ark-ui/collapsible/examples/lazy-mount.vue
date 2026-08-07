<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
</script>

<template>
  <Collapsible.Root lazy-mount unmount-on-exit>
    <Collapsible.Trigger>
      Session Details
      <Collapsible.Indicator>
        <ChevronRightIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body>
        This content is lazily mounted when first opened and removed from the DOM when collapsed.
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
</template>
