<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.ItemGroup
    :class="cn('flex flex-col [&+&]:mt-2', props.class)"
    data-slot="select-item-group"
  >
    <slot />
  </Select.ItemGroup>
</template>
