<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.Context
    :class="cn(props.class)"
    data-slot="date-picker-context"
    v-slot="api"
  >
    <slot :api="api" />
  </DatePicker.Context>
</template>
