<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
</script>

<template>
  <Clipboard.Root default-value="https://ark-ui.com">
    <Clipboard.Value />
    <Clipboard.Trigger>
      <Button variant="outline" size="icon">
        <Clipboard.Indicator />
      </Button>
    </Clipboard.Trigger>
  </Clipboard.Root>
</template>
