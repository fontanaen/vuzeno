<script setup lang="ts">
import { ToggleGroup, useToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-vue-next";

const toggleGroup = useToggleGroup({ defaultValue: ["left"] });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      Selected: {{ String(toggleGroup.value) }}
    </output>

    <ToggleGroup.RootProvider :value="toggleGroup">
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
    </ToggleGroup.RootProvider>
  </div>
</template>
