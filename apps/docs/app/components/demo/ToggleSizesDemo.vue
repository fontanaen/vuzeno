<script setup lang="ts">
import { Toggle } from "@vuzeno/registry/ui/toggle";
import { BoldIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle.Root size="sm">
      <BoldIcon />
    </Toggle.Root>
    <Toggle.Root size="md">
      <BoldIcon />
    </Toggle.Root>
    <Toggle.Root size="lg">
      <BoldIcon />
    </Toggle.Root>
  </div>
</template>
