<script setup lang="ts">
import { Calendar } from '@vuetella/ui/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@vuetella/ui/components/popover';
import { Button } from '@vuetella/ui/components/button';
import { CalendarIcon } from 'lucide-vue-next';
import type { Field } from './field';
import { CalendarDate, getLocalTimeZone, type DateValue } from '@internationalized/date';
import type { FilterVariant } from './FiltersProvider.vue';

const props = defineProps<{
    field: Field<CalendarDate>;
    variant: FilterVariant;
}>()

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
                :min-value="field.min"
                :max-value="field.max"
                @update:model-value="onDateChange"
            />
        </PopoverContent>
    </Popover>
</template>