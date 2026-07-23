<script setup lang="ts">
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@lucide/vue";
import { Button } from "@vuzeno/registry/ui/button";
import { DatePicker } from "@vuzeno/registry/ui/date-picker";
</script>

<template>
  <DatePicker.Root :numOfMonths="2">
    <DatePicker.Label>Label</DatePicker.Label>

    <DatePicker.Control>
      <DatePicker.Input :index="0" />
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
      <DatePicker.ViewControl>
        <DatePicker.PrevTrigger>
          <ChevronLeftIcon />
        </DatePicker.PrevTrigger>
        <DatePicker.RangeText />
        <DatePicker.NextTrigger>
          <ChevronRightIcon />
        </DatePicker.NextTrigger>
      </DatePicker.ViewControl>

      <div class="flex gap-4">
        <!-- First month -->
        <DatePicker.Context v-slot="{ api }">
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
                <DatePicker.TableCell v-for="(day, id) in week" :key="id" :value="day">
                  <DatePicker.TableCellTrigger>
                    {{ day.day }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>

        <!-- Second month -->
        <DatePicker.Context v-slot="{ api }">
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
              <DatePicker.TableRow
                v-for="(week, id) in api.getOffset({ months: 1 }).weeks"
                :key="id"
               
              >
                <DatePicker.TableCell
                  v-for="(day, id) in week"
                  :key="id"
                  :value="day"
                  :visibleRange="api.getOffset({ months: 1 }).visibleRange"
                 
                >
                  <DatePicker.TableCellTrigger>
                    {{ day.day }}
                  </DatePicker.TableCellTrigger>
                </DatePicker.TableCell>
              </DatePicker.TableRow>
            </DatePicker.TableBody>
          </DatePicker.Table>
        </DatePicker.Context>
      </div>
    </DatePicker.Content>
  </DatePicker.Root>
</template>
