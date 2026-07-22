<script setup lang="ts">
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
import { ChevronRightIcon } from "lucide-vue-next";
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
