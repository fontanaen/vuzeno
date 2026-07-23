<script setup lang="ts">
import { type DateValue, parseDate } from "@internationalized/date";
import { CalendarIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";

const format = (date: DateValue) => date.year.toString();

const parse = (value: string | undefined) => {
  if (value === "" || !value) return;
  const year = Number(value);
  if (year < 100) {
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;
    return parseDate(new Date(currentCentury + year, 0));
  }
  return parseDate(new Date(Number(value), 0));
};
</script>

<template>
  <DatePicker.Root
    :format="format"
    :parse="parse"
    default-view="year"
    min-view="year"
    placeholder="yyyy"
   
  >
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
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
      <DatePicker.View view="year">
        <DatePicker.Context v-slot="{ api }">
          <DatePicker.Table>
            <DatePicker.TableBody>
              <DatePicker.TableRow
                v-for="(years, id) in api.getYearsGrid({ columns: 4 })"
                :key="id"
               
              >
                <DatePicker.TableCell
                  v-for="(year, id) in years"
                  :key="id"
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
