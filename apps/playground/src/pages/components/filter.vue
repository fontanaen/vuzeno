<script setup lang="ts">
import { FiltersGroup, FiltersMenu, FiltersProvider, FiltersClear } from '@vuetella/registry/ui/filter';
import { computed, h, ref, type Ref } from 'vue';
import type { FieldGroup, Filter } from '@vuetella/registry/ui/filter';
import { ButtonGroup } from '@vuetella/ui/components/button-group';
import { Button } from '@vuetella/ui/components/button';
import { CalendarIcon, DollarSignIcon, TagIcon, UserIcon, ToggleRightIcon } from 'lucide-vue-next';
import { CalendarDate } from '@internationalized/date';

definePage({
  name: 'components.filter'
})

const variant = ref('outline');
const size = ref('default');

const fields = ref<FieldGroup[]>([
   {
    group: 'Base',
    fields: [
        { 
            key: 'status',
            name: 'Status',
            type: 'text', 
            icon: TagIcon, 
            options: {
                searchable: true,
                items: [
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' },
                    { label: 'Pending', value: 'pending' },
                    { label: 'Cancelled', value: 'cancelled' },
                    { label: 'Completed', value: 'completed' },
                    { label: 'Refunded', value: 'refunded' },
                    { label: 'Failed', value: 'failed' },
                ],
                optionDisplay: (option) => {
                    const color = {
                        active: 'bg-green-500',
                        inactive: 'bg-red-500',
                        pending: 'bg-yellow-500',
                        cancelled: 'bg-gray-500',
                        completed: 'bg-blue-500',
                        refunded: 'bg-purple-500',
                        failed: 'bg-pink-500',
                    } as const
                    
                    return h('div', { class: 'flex items-center gap-2' }, [
                        h('span', { class: `size-2 rounded-full ${color[option.value as keyof typeof color]}` }),
                        h('span', option.label)
                    ])
                },
            },
            operators: [
                { label: 'is', value: 'eq', inputType: 'select' },
                { label: 'is not', value: 'neq', inputType: 'select' },
                { label: 'include', value: 'in', inputType: 'multi-select' },
                { label: 'starts with', value: 'starts_with' },
            ]
        },
        { 
            key: 'name',
            name: 'Name', 
            type: 'text', 
            icon: UserIcon, 
            operators: [
                { label: 'is', value: 'eq' },
                { label: 'is not', value: 'neq' },
                { label: 'is empty', value: 'null', inputType: 'none' },
                { label: 'is not empty', value: 'not_null', inputType: 'none' },
                { label: 'contains', value: 'contains' },
                { label: 'starts with', value: 'starts_with' },
            ] 
        }
    ]
   },
   {
    group: 'Dates',
    fields: [
        {
            key: 'created_at',
            name: 'Created At',
            type: 'date',
            icon: CalendarIcon,
            min: new CalendarDate(2026, 1, 3),
            max: new CalendarDate(2026, 1, 10),
            multiple: false,
            operators: [
                { label: 'is', value: 'eq' },
                { label: 'between', value: 'btw', inputType: 'date-range' },
            ]
        },
        {
            key: 'updated_at',
            name: 'Updated At',
            type: 'date',
            icon: CalendarIcon,
            multiple: false,
            options: {
                items: [
                    { label: 'Today', value: new CalendarDate(2026, 1, 3) }, 
                    { label: 'Yesterday', value: new CalendarDate(2026, 1, 2) }
                ]
            },
            operators: [
                { label: 'is', value: 'eq', inputType: 'select' },
                { label: 'between', value: 'btw', inputType: 'date-range' },
            ]
        }
    ]
   },
   {
    group: 'Numbers',
    fields: [
        {
            key: 'price',
            name: 'Price',
            type: 'number',
            icon: DollarSignIcon,
            min: 0,
            max: 1000,
            step: 10,
            numberFormat: { style: 'currency', currency: 'USD', maximumFractionDigits: 0, compactDisplay: 'short' },
            operators: [
                { label: 'less than', value: 'lt', inputType: 'number', default: true, defaultValue: 500 },
                { label: 'between', value: 'btw', inputType: 'number-range', },
            ]
        }
    ]
   },
   {
    group: 'Booleans',
    fields: [
        {
            key: 'is_active',
            name: 'Is Active',
            icon: ToggleRightIcon,
            type: 'boolean',
            operators: [
                    { label: 'is', value: 'eq' },
                    { label: 'is not', value: 'neq' },
            ]
        }
    ]
   }
]); 

const filters: Ref<Filter[]> = ref([
    { field: 'price', operator: 'btw', value: [100, 1000] },
]);

const json = computed(() => JSON.stringify(filters.value.map((filter) => {
    let stringValue: any = filter.value;

    if (filter.value instanceof CalendarDate || typeof filter.value === 'string') {
        stringValue = filter.value.toString();
    }

    if (filter.value && typeof filter.value === 'object' && 'start' in filter.value && 'end' in filter.value) {
        stringValue = {
            start: filter.value.start?.toString(),
            end: filter.value.end?.toString(),
        }
    }

    return {
        field: filter.field,
        operator: filter.operator,
        value: stringValue,
    }
}), null, 2));
</script>
    
<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Filter</h1>

    <div class="space-y-4">
        <h2 class="text-xl font-bold">Example</h2>

        <div class="grid grid-cols-1 gap-4">
            <h3 class="text-lg font-bold">Basic Filter</h3>
        </div>

        <ButtonGroup>
            <Button size="sm" variant="outline" @click="variant = 'outline'">outline</Button>
            <Button size="sm" variant="outline" @click="variant = 'secondary'">secondary</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button size="sm" variant="outline" @click="size = 'sm'">sm</Button>
            <Button size="sm" variant="outline" @click="size = 'default'">md</Button>
            <Button size="sm" variant="outline" @click="size = 'lg'">lg</Button>
        </ButtonGroup>

        <FiltersProvider v-model:filters="filters" :variant="variant" :size="size" :fields="fields">
            <FiltersMenu />

            <FiltersGroup />

            <FiltersClear v-if="filters.length > 0" />
        </FiltersProvider>

        <div class="bg-muted p-4 rounded-md text-xs">
            <pre>{{ json }}</pre>
        </div>
    </div>
  </div>
</template>