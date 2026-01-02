<script setup lang="ts">
import { FilterGroup, FilterMenu, FilterMenuContent, FilterMenuTrigger, FilterProvider, FiltersClear } from '@vuetella/registry/ui/filter';
import { Input } from '@vuetella/ui/components/input';
import { ref } from 'vue';
import type { FieldGroup, Filter } from '@vuetella/registry/ui/filter';
import { TagIcon, UserIcon } from 'lucide-vue-next';

definePage({
  name: 'components.filter'
})

const fields = ref<FieldGroup[]>([
   {
    group: 'User',
    fields: [
        { 
            key: 'status',
            name: 'Status', 
            type: 'text', 
            icon: TagIcon, 
            options: ['active', 'inactive'],
            optionDisplay: (option) => `${option}`,
            operators: [
                { name: 'is', value: 'eq' },
                { name: 'is not', value: 'neq' },
                { name: 'include', value: 'in', multiple: true },
                { name: 'starts with', value: 'starts_with', custom: true },
            ]
        },
        { 
            key: 'name',
            name: 'Name', 
            type: 'text', 
            icon: UserIcon, 
            operators: [
                { name: 'is', value: 'eq' },
                { name: 'is not', value: 'neq' },
                { name: 'contains', value: 'contains' },
                { name: 'starts with', value: 'starts_with' },
            ] 
        },
    ]
   }
]);

const filters = ref<Filter[]>([
    { field: 'status', operator: 'in', value: ['active'] },
    { field: 'name', operator: 'eq', value: 'John Doe' },
]);
</script>
    
<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Filter</h1>

    <div class="space-y-4">
        <h2 class="text-xl font-bold">Example</h2>

        <div class="grid grid-cols-1 gap-4">
            <h3 class="text-lg font-bold">Basic Filter</h3>
        </div>

        <FilterProvider v-model:filters="filters" :fields="fields">
            <FilterMenu>
                <FilterMenuTrigger />
                <FilterMenuContent />
            </FilterMenu>

            <FilterGroup />

            <FiltersClear v-if="filters.length > 0" />
        </FilterProvider>

        <div class="bg-muted p-4 rounded-md text-sm">
            <pre>{{ JSON.stringify(filters, null, 2) }}</pre>
        </div>
    </div>
  </div>
</template>