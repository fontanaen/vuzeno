<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { DateInput, useDateInput } from "@vuzeno/registry/ui/date-input";
import { DatePicker, useDatePicker } from "@vuzeno/registry/ui/date-picker";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { computed } from "vue";

const datePicker = useDatePicker();
const dateInput = useDateInput(
  computed(() => ({
    value: datePicker.value.value,
    onValueChange(details) {
      datePicker.value.setValue(details.value);
    },
  })),
);
</script>

<template>
  <DateInput.RootProvider :value="dateInput">
    <DateInput.Label>Date</DateInput.Label>
    <DateInput.Control>
      <DatePicker.RootProvider :value="datePicker">
        <DatePicker.Control>
          <DateInput.SegmentGroup v-slot="segment">
            <DateInput.Segment :segment="segment" />  
          </DateInput.SegmentGroup>
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
          <DatePicker.View view="month">
            <DatePicker.Context v-slot="{ api }">
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
              <DatePicker.Table>
                <DatePicker.TableBody>
                  <DatePicker.TableRow
                    v-for="(months, id) in api.getMonthsGrid({ columns: 4, format: 'short' })"
                    :key="id"
                  >
                    <DatePicker.TableCell
                      v-for="(month, monthId) in months"
                      :key="monthId"
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
            <DatePicker.Context v-slot="{ api }">
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
              <DatePicker.Table>
                <DatePicker.TableBody>
                  <DatePicker.TableRow
                    v-for="(years, id) in api.getYearsGrid({ columns: 4 })"
                    :key="id"
                  >
                    <DatePicker.TableCell
                      v-for="(year, yearId) in years"
                      :key="yearId"
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
      </DatePicker.RootProvider>
    </DateInput.Control>
  </DateInput.RootProvider>
</template>
