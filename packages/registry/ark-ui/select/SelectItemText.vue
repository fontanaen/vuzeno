<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.ItemText
    :class="cn('flex-1 overflow-hidden text-ellipsis whitespace-nowrap', props.class)"
    data-slot="select-item-text"
  >
    <slot />
  </Select.ItemText>
</template>
