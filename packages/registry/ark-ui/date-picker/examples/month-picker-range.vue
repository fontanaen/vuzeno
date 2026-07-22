<script setup lang="ts">
import { CalendarDate, type DateValue } from "@internationalized/date";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";

const format = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${month}/${year}`;
};

const parse = (value: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/;
  const fullMatch = value.match(fullRegex);
  if (fullMatch) {
    const [_, month, year] = fullMatch.map(Number);
    return new CalendarDate(year, month, 1);
  }
};
</script>

<template>
  <DatePicker.Root
    :format="format"
    :parse="parse"
    selection-mode="range"
    default-view="month"
    min-view="month"
    placeholder="mm/yyyy"
   
  >
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input :index="0" />
      <DatePicker.Input :index="1" />
      <DatePicker.Trigger as-child>
        <Button size="icon-sm" variant="outline">
          <CalendarIcon />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.ClearTrigger>
        Clear
      </DatePicker.ClearTrigger>
    </DatePicker.Control>
    <DatePicker.Content>
      <DatePicker.View view="month">
        <DatePicker.ViewControl>
          <DatePicker.PrevTrigger>
            <ChevronLeftIcon />
          </DatePicker.PrevTrigger>
          <DatePicker.ViewTrigger>
            <DatePicker.RangeText />
          </DatePicker.ViewTrigger>
          <DatePicker.NextTrigger>
            <ChevronRightIcon />
          </DatePicker.NextTrigger>
        </DatePicker.ViewControl>
        <DatePicker.Context v-slot="{ api }">
          <DatePicker.Table>
            <DatePicker.TableBody>
              <DatePicker.TableRow
                v-for="(months, id) in api.getMonthsGrid({ columns: 4, format: 'short' })"
                :key="id"
               
              >
                <DatePicker.TableCell
                  v-for="(month, idx) in months"
                  :key="idx"
                  :value="month.value"
                 
                >
                  <DatePicker.TableCellTrigger>
                    {{ month.label }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </DatePicker.View>
      <DatePicker.View view="year">
        <DatePicker.ViewControl>
          <DatePicker.PrevTrigger>
            <ChevronLeftIcon />
          </DatePicker.PrevTrigger>
          <DatePicker.ViewTrigger>
            <DatePicker.RangeText />
          </DatePicker.ViewTrigger>
          <DatePicker.NextTrigger>
            <ChevronRightIcon />
          </DatePicker.NextTrigger>
        </DatePicker.ViewControl>
        <DatePicker.Context v-slot="{ api }">
          <DatePicker.Table>
            <DatePicker.TableBody>
              <DatePicker.TableRow
                v-for="(years, id) in api.getYearsGrid({ columns: 4 })"
                :key="id"
               
              >
                <DatePicker.TableCell
                  v-for="(year, idx) in years"
                  :key="idx"
                  :value="year.value"
                 
                >
                  <DatePicker.TableCellTrigger>
                    {{ year.label }}
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
