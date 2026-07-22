<script setup lang="ts">
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
</script>

<template>
  <DatePicker.Root selection-mode="multiple" :max-selected-dates="3" inline>
    <DatePicker.View view="day">
      <DatePicker.Context v-slot="{ api }">
        <DatePicker.ViewControl>
          <DatePicker.PrevTrigger>
            <ChevronLeftIcon />
          </DatePicker.PrevTrigger>
          <DatePicker.RangeText />
          <DatePicker.NextTrigger>
            <ChevronRightIcon />
          </DatePicker.NextTrigger>
        </DatePicker.ViewControl>
        <DatePicker.Table>
          <DatePicker.TableHead>
            <DatePicker.TableRow>
              <DatePicker.TableHeader v-for="(weekDay, id) in api.weekDays" :key="id">
                {{ weekDay.short }}
              </DatePicker.TableHeader>
            </DatePicker.TableRow>
          </DatePicker.TableHead>
          <DatePicker.TableBody>
            <DatePicker.TableRow v-for="(week, id) in api.weeks" :key="id">
              <DatePicker.TableCell v-for="(day, id) in week" :key="id" :value="day">
                <DatePicker.TableCellTrigger>
                  {{ day.day }}
                </DatePicker.TableCellTrigger>
              </DatePicker.TableCell>
            </DatePicker.TableRow>
          </DatePicker.TableBody>
        </DatePicker.Table>
      </DatePicker.Context>
    </DatePicker.View>
  </DatePicker.Root>
</template>
