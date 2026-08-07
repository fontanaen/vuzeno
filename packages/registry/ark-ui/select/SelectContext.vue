<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.Context
    :class="cn(props.class)"
    data-slot="select-context"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Select.Context>
</template>
