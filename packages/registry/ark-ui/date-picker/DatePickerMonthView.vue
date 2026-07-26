<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import DatePickerContext from "./DatePickerContext.vue";
import DatePickerTable from "./DatePickerTable.vue";
import DatePickerTableBody from "./DatePickerTableBody.vue";
import DatePickerTableCell from "./DatePickerTableCell.vue";
import DatePickerTableCellTrigger from "./DatePickerTableCellTrigger.vue";
import DatePickerTableRow from "./DatePickerTableRow.vue";
import DatePickerView from "./DatePickerView.vue";
import DatePickerViewNav from "./DatePickerViewNav.vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    columns?: number;
    format?: "short" | "long" | "narrow" | "numeric" | "2-digit";
  }>(),
  {
    columns: 4,
    format: "short",
  },
);
</script>

<template>
  <DatePickerView view="month" :class="cn(props.class)">
    <DatePickerViewNav />
    <DatePickerContext v-slot="{ api }">
      <DatePickerTable>
        <DatePickerTableBody>
          <DatePickerTableRow
            v-for="(months, id) in api.getMonthsGrid({ columns: props.columns, format: props.format })"
            :key="id"
          >
            <DatePickerTableCell
              v-for="(month, id) in months"
              :key="id"
              :value="month.value"
            >
              <DatePickerTableCellTrigger>
                {{ month.label }}
              </DatePickerTableCellTrigger>
            </DatePickerTableCell>
          </DatePickerTableRow>
        </DatePickerTableBody>
      </DatePickerTable>
    </DatePickerContext>
    <slot />
  </DatePickerView>
</template>
