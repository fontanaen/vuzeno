<script setup lang="ts">
import { SegmentGroup, useSegmentGroup } from "@vuzeno/registry/ui/segment-group";

const frameworks = ["React", "Solid", "Svelte", "Vue"];
const segmentGroup = useSegmentGroup({ defaultValue: "React" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <output class="text-sm text-muted-foreground">
      selected: {{ segmentGroup.value }}
    </output>

    <SegmentGroup.RootProvider :value="segmentGroup">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
        <SegmentGroup.ItemText>{{ framework }}</SegmentGroup.ItemText>
      </SegmentGroup.Item>
    </SegmentGroup.RootProvider>
  </div>
</template>
