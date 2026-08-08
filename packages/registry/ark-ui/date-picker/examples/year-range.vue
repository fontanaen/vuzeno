<script setup lang="ts">
import { CalendarDate, type DateValue } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { Field } from "@vuzeno/registry/ui/field";

const format = (date: DateValue) => date.year.toString();

const parse = (value: string | undefined) => {
  if (!value) return;
  const fullRegex = /^(\d{4})$/;
  const fullMatch = value.match(fullRegex);
  if (fullMatch) {
    const [_, year] = fullMatch.map(Number);
    return new CalendarDate(year, 1, 1);
  }
};
</script>

<template>
  <Field.Root>
    <Field.Label>Label</Field.Label>
    <DatePicker.Root
      :format="format"
      :parse="parse"
      selection-mode="range"
      default-view="year"
      min-view="year"
      placeholder="yyyy"
   
    >
      <DatePicker.Control>
        <DatePicker.Input :index="0" />
        <DatePicker.Input :index="1" />
        <DatePicker.Trigger as-child>
          <Button size="icon" variant="outline">
            <CalendarIcon />
          </Button>
        </DatePicker.Trigger>
      </DatePicker.Control>
      <DatePicker.Content>
        <DatePicker.View view="year">
          <DatePicker.Context v-slot="{ api }">
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>
                <ChevronLeftIcon />
              </DatePicker.PrevTrigger>
              <span>{{ api.getDecade().start }} - {{ api.getDecade().end }}</span>
              <DatePicker.NextTrigger>
                <ChevronRightIcon />
              </DatePicker.NextTrigger>
            </DatePicker.ViewControl>
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
  </Field.Root>
</template>
