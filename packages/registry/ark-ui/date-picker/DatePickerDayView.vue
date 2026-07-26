<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import DatePickerContext from "./DatePickerContext.vue";
import DatePickerTable from "./DatePickerTable.vue";
import DatePickerTableBody from "./DatePickerTableBody.vue";
import DatePickerTableCell from "./DatePickerTableCell.vue";
import DatePickerTableCellTrigger from "./DatePickerTableCellTrigger.vue";
import DatePickerTableHead from "./DatePickerTableHead.vue";
import DatePickerTableHeader from "./DatePickerTableHeader.vue";
import DatePickerTableRow from "./DatePickerTableRow.vue";
import DatePickerView from "./DatePickerView.vue";
import DatePickerViewNav from "./DatePickerViewNav.vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <DatePickerView view="day" :class="cn(props.class)">
    <DatePickerViewNav />
    <DatePickerContext v-slot="{ api }">
      <DatePickerTable>
        <DatePickerTableHead>
          <DatePickerTableRow>
            <DatePickerTableHeader v-for="(weekDay, id) in api.weekDays" :key="id">
              {{ weekDay.short }}
            </DatePickerTableHeader>
          </DatePickerTableRow>
        </DatePickerTableHead>
        <DatePickerTableBody>
          <DatePickerTableRow v-for="(week, id) in api.weeks" :key="id">
            <DatePickerTableCell v-for="(day, id) in week" :key="id" :value="day">
              <DatePickerTableCellTrigger>
                {{ day.day }}
              </DatePickerTableCellTrigger>
            </DatePickerTableCell>
          </DatePickerTableRow>
        </DatePickerTableBody>
      </DatePickerTable>
    </DatePickerContext>
    <slot />
  </DatePickerView>
</template>
