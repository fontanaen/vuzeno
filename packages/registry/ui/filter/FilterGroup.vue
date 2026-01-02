<script setup lang="ts">
import { type Field, isField, isFieldGroup } from './field';
import FilterItem from './FilterItem.vue';
import { injectFilterContext } from './FilterProvider.vue';

const { filters, fields } = injectFilterContext();

function getField(key: string): Field {
    for (const field of fields.value) {
        if (isFieldGroup(field) && field.fields.some(field => field.key === key)) {
            return field.fields.find(field => field.key === key) as Field;
        }

        if (isField(field) && field.key === key) {
            return field;
        }
    }

    throw new Error(`Field with key ${key} not found`);
}
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <template v-for="filter in filters" :key="filter.field">
            <FilterItem :filter="filter" :field="getField(filter.field)" @delete="filters.splice(filters.indexOf(filter), 1)" />
        </template>
    </div>
</template>