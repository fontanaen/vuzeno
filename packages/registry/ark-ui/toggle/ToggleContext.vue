<script setup lang="ts">
import { Toggle } from "@ark-ui/vue/toggle";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Toggle.Context
    :class="cn(props.class)"
    data-slot="toggle-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Toggle.Context>
</template>
