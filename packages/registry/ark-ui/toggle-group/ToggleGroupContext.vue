<script setup lang="ts">
import { ToggleGroup } from "@ark-ui/vue/toggle-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ToggleGroup.Context
    :class="cn(props.class)"
    data-slot="toggle-group-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </ToggleGroup.Context>
</template>
