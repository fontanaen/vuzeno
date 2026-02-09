<script setup lang="ts">
import { CalendarDate, type DateValue, getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { FilterVariant } from "./FiltersProvider.vue";
import type { Field } from "./field";

const props = defineProps<{
  field: Field<CalendarDate>;
  variant: FilterVariant;
}>();

const value = defineModel<CalendarDate>();

function onDateChange(date?: DateValue) {
  if (date && date instanceof CalendarDate) {
    value.value = date;
  }
}
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button
                :variant="variant"
                class="h-auto w-36 justify-between font-normal text-sm px-3"
                :class="{ 'text-muted-foreground': !value }"
            >
                {{ value instanceof CalendarDate ? value.toDate(getLocalTimeZone()).toLocaleDateString() : "Select date" }}
                <CalendarIcon class="size-3!" />
            </Button>
        </PopoverTrigger>

        <PopoverContent class="w-auto overflow-hidden p-0" align="start">
            <Calendar
                :model-value="value"
                layout="month-and-year"
                :min-value="(field.min as CalendarDate | undefined)"
                :max-value="(field.max as CalendarDate | undefined)"
                @update:model-value="onDateChange"
            />
        </PopoverContent>
    </Popover>
</template>