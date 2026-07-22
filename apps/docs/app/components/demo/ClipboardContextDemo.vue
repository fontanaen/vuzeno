<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Clipboard } from "@vuzeno/registry/ui/clipboard";
import { CheckIcon, ClipboardCopyIcon } from "lucide-vue-next";
</script>

<template>
  <Clipboard.Root default-value="https://ark-ui.com">
    <Clipboard.Context v-slot="clipboard">
      <Button variant="outline" @click="clipboard.copy()">
        <CheckIcon v-if="clipboard.copied" />
        <ClipboardCopyIcon v-else />
        {{ clipboard.copied ? "Copied!" : "Copy" }}
      </Button>
    </Clipboard.Context>
  </Clipboard.Root>
</template>
