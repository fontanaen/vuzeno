<script setup lang="ts">
import { ToggleGroup } from "@vuzeno/registry/ui/toggle-group";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col gap-4">
    <ToggleGroup.Root variant="default" :default-value="['left']">
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

    <ToggleGroup.Root variant="outline" :default-value="['left']">
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
