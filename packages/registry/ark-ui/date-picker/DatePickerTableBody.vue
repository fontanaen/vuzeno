<script setup lang="ts">
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePicker.TableBody
    :class="cn(props.class)"
    data-slot="date-picker-table-body"
  >
    <slot />
  </DatePicker.TableBody>
</template>
