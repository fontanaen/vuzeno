<script setup lang="ts">
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];
</script>

<template>
  <SegmentGroup.Root default-value="React">
    <SegmentGroup.Indicator />
    <SegmentGroup.Item
      v-for="framework in frameworks"
      :key="framework"
      :value="framework"
      :disabled="framework === 'Svelte'"
    >
      <SegmentGroup.ItemText>{{ framework }}</SegmentGroup.ItemText>
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
