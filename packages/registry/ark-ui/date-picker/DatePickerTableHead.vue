<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.TableHead
    :class="cn(props.class)"
    data-slot="date-picker-table-head"
  >
    <slot />
  </DatePicker.TableHead>
</template>
