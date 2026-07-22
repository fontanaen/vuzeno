<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard, useClipboard } from "@vuzeno/registry/ui/clipboard";

const clipboard = useClipboard({ value: "https://ark-ui.com" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      value: {{ clipboard.value }}, copied: {{ String(clipboard.copied) }}
    </output>

    <Clipboard.RootProvider :value="clipboard">
      <Clipboard.Input />
      <Clipboard.Trigger>
        <Button variant="outline" size="icon">
          <Clipboard.Indicator />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.RootProvider>
  </div>
</template>
