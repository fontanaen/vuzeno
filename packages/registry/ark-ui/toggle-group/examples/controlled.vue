<script setup lang="ts">
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "@lucide/vue";
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { ref } from "vue";

const value = ref(["left"]);
</script>

<template>
  <ToggleGroup.Root v-model:value="value">
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
