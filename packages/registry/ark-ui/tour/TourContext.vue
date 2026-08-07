<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Context
    :class="cn(props.class)"
    data-slot="tour-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Tour.Context>
</template>
