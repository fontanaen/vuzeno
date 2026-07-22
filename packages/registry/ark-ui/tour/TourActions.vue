<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Actions
    :class="cn('flex flex-wrap gap-2', props.class)"
    data-slot="tour-actions"
    v-slot="actions"
  >
    <slot v-bind="actions" />
  </Tour.Actions>
</template>
