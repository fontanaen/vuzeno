<script setup lang="ts">
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-vue-next";
</script>

<template>
  <ToggleGroup.Root :default-value="['bold']" multiple>
    <ToggleGroup.Item value="bold">
      <BoldIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="italic">
      <ItalicIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="underline">
      <UnderlineIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</template>
