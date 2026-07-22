<script setup lang="ts">
import { DatePicker, type DatePickerTableCellProps } from "@ark-ui/vue/date-picker";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerTableCellProps & { class?: HTMLAttributes["class"] }>();

const tableCellProps = reactiveOmit(props, "class");
</script>

<template>
  <DatePicker.TableCell
    v-bind="tableCellProps"
    :class="cn('p-0.25 text-center', props.class)"
    data-slot="date-picker-table-cell"
  >
    <slot />
  </DatePicker.TableCell>
</template>
