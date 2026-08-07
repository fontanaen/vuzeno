<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
import { ref } from "vue";

const copyCount = ref(0);
</script>

<template>
  <Clipboard.Root
    default-value="https://ark-ui.com"
    @status-change="(details) => {
      if (details.copied) {
        copyCount += 1;
      }
    }"
  >
    <Clipboard.Trigger>
      <Button variant="outline" size="icon">
        <Clipboard.Indicator />
      </Button>
    </Clipboard.Trigger>
    
    <p class="text-sm text-muted-foreground">
      Copied {{ copyCount }} times
    </p>
  </Clipboard.Root>
</template>
