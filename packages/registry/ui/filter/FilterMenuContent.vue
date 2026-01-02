<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator } from '@vuetella/ui/components/dropdown-menu';
import { injectFilterContext } from './FilterProvider.vue';
import FilterMenuItem from './FilterMenuItem.vue';
import { isField, isFieldGroup } from './field';

const { fields } = injectFilterContext();
</script>

<template>
    <DropdownMenuContent align="start" class="min-w-48">
        <template v-for="(item, index) in fields" :key="item">
            <FilterMenuItem v-if="isField(item)" :key="item.key" :field="item" />

            <DropdownMenuGroup v-if="isFieldGroup(item)" :class="{ 'mb-4': index !== fields.length - 1 }">
                <DropdownMenuLabel class="text-xs font-medium text-muted-foreground">{{ item.group }}</DropdownMenuLabel>
                <template v-for="field in item.fields" :key="field.key">
                    <FilterMenuItem v-if="isField(field)" :key="field.key" :field="field" />
                </template>
            </DropdownMenuGroup>
        </template>
    </DropdownMenuContent>
</template>