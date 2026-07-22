<script setup lang="ts">
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <ToggleGroup.Root size="sm" :default-value="['left']">
      <ToggleGroup.Item value="left">
        <AlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <AlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <AlignRightIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>

    <ToggleGroup.Root size="md" :default-value="['left']">
      <ToggleGroup.Item value="left">
        <AlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <AlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <AlignRightIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>

    <ToggleGroup.Root size="lg" :default-value="['left']">
      <ToggleGroup.Item value="left">
        <AlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center">
        <AlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right">
        <AlignRightIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </div>
</template>
