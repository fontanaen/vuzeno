<script setup lang="ts">
import { ChevronRightIcon } from "@lucide/vue";
import { Collapsible } from "@vuzeno/registry/ui/collapsible";
</script>

<template>
  <Collapsible.Root>
    <Collapsible.Trigger class="border border-border rounded-lg [&:hover:not(:disabled):not([data-disabled])]:bg-primary/10">
      What is Ark UI?
      <Collapsible.Indicator>
        <ChevronRightIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body>
        Ark UI is a headless component library for building accessible, high-quality UI components for React, Solid,
        Vue, and Svelte.
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
</template>
