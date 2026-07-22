<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.List
    :class="cn(props.class)"
    data-slot="select-list"
  >
    <slot />
  </Select.List>
</template>
