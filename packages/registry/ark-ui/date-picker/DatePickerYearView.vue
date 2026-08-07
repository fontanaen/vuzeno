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
  }>(),
  {
    columns: 4,
  },
);
</script>

<template>
  <DatePickerView view="year" :class="cn(props.class)">
    <DatePickerViewNav />
    <DatePickerContext v-slot="{ api }">
      <DatePickerTable>
        <DatePickerTableBody>
          <DatePickerTableRow
            v-for="(years, id) in api.getYearsGrid({ columns: props.columns })"
            :key="id"
          >
            <DatePickerTableCell
              v-for="(year, id) in years"
              :key="id"
              :value="year.value"
            >
              <DatePickerTableCellTrigger>
                {{ year.label }}
              </DatePickerTableCellTrigger>
            </DatePickerTableCell>
          </DatePickerTableRow>
        </DatePickerTableBody>
      </DatePickerTable>
    </DatePickerContext>
    <slot />
  </DatePickerView>
</template>
