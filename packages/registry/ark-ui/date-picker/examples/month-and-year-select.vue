<script setup lang="ts">
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root>
    <DatePicker.Label>Label</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input />
      <DatePicker.Trigger as-child>
        <Button size="icon-sm" variant="outline">
          <CalendarIcon />
        </Button>
      </DatePicker.Trigger>
    </DatePicker.Control>
    <DatePicker.Content>
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
    </DatePicker.Content>
  </DatePicker.Root>
</template>
