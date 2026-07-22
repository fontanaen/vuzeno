<script setup lang="ts">
import { Toggle } from "@vuzeno/registry/ui/toggle";
import { BoldIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle.Root variant="default">
      <BoldIcon />
    </Toggle.Root>
    <Toggle.Root variant="outline">
      <BoldIcon />
    </Toggle.Root>
  </div>
</template>
