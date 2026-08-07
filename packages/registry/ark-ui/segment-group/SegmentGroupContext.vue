<script setup lang="ts">
import { SegmentGroup } from "@ark-ui/vue/segment-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <SegmentGroup.Context
        :class="cn(props.class)"
    data-slot="segment-group-context"
  >
    <slot />
  </SegmentGroup.Context>
</template>
