<script setup lang="ts">
import { SegmentGroup } from "@vuzeno/registry/ui/segment-group";
import { ref } from "vue";

const frameworks = ["React", "Solid", "Svelte", "Vue"];
const value = ref<string | null>(null);
</script>

<template>
  <SegmentGroup.Root v-model="value">
    <SegmentGroup.Indicator />
    <SegmentGroup.Item v-for="framework in frameworks" :key="framework" :value="framework">
      <SegmentGroup.ItemText>{{ framework }}</SegmentGroup.ItemText>
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
