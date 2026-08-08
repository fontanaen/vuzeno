<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@lucide/vue";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { cn } from "cnfast";
import { computed } from "vue";
import { Button } from "../button";
import { injectFiltersContext } from "./context";
import type { DateField } from "./field";
import { filtersControlVariants } from "./variants";

const value = defineModel<CalendarDate | null>();

const props = defineProps<{
  field: DateField;
}>();

defineOptions({
  inheritAttrs: false,
});

const { variant, size } = injectFiltersContext();

const pickerValue = computed<DateValue[]>({
  get() {
    if (value.value instanceof CalendarDate) {
      return [value.value];
    }

    return [];
  },
  set(dates) {
    const next = dates[0];

    if (next instanceof CalendarDate) {
      value.value = next;
      return;
    }

    value.value = null;
  },
});
</script>

<template>
  <DatePicker.Root
    v-model="pickerValue"
    :min="props.field.min"
    :max="props.field.max"
  >
    <DatePicker.Trigger>
      <Button
        :variant="variant"
        :size="size"
        :class="
          cn(
            'w-36 justify-between font-normal px-3 rounded-none border-l-0',
            filtersControlVariants({ size }),
            { 'text-muted-foreground': !value },
          )
        "
      >
        {{
          value instanceof CalendarDate
            ? value.toDate(getLocalTimeZone()).toLocaleDateString()
            : "Select date"
        }}
        <CalendarIcon class="size-3!" />
      </Button>
    </DatePicker.Trigger>

    <DatePicker.Content class="min-w-0 p-3">
      <DatePicker.View view="day">
        <DatePicker.Context v-slot="{ api }">
          <DatePicker.ViewControl>
            <div class="flex items-center gap-2">
              <DatePicker.MonthSelect />
              <DatePicker.YearSelect />
            </div>
            <div>
              <DatePicker.PrevTrigger size="icon-xs">
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>
              <DatePicker.NextTrigger size="icon-xs">
                <ChevronRightIcon />
              </DatePicker.NextTrigger>
            </div>
          </DatePicker.ViewControl>
          <DatePicker.Table>
            <DatePicker.TableHead>
              <DatePicker.TableRow>
                <DatePicker.TableHeader
                  v-for="(weekDay, id) in api.weekDays"
                  :key="id"
                >
                  {{ weekDay.short }}
                </DatePicker.TableHeader>
              </DatePicker.TableRow>
            </DatePicker.TableHead>
            <DatePicker.TableBody>
              <DatePicker.TableRow v-for="(week, id) in api.weeks" :key="id">
                <DatePicker.TableCell
                  v-for="(day, dayId) in week"
                  :key="dayId"
                  :value="day"
                >
                  <DatePicker.TableCellTrigger>
                    {{ day.day }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </DatePicker.View>
    </DatePicker.Content>
  </DatePicker.Root>
</template>
