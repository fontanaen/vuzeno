<script setup lang="ts">
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-vue-next";
</script>

<template>
  <ToggleGroup.Root :default-value="['left']">
    <ToggleGroup.Item value="left">
      <AlignLeftIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="center">
      <AlignCenterIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="right">
      <AlignRightIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="justify">
      <AlignJustifyIcon />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</template>
