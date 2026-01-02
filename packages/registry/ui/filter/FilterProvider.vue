<script lang="ts">
import { createContext } from 'reka-ui';
import { ref, toRefs, type Ref } from 'vue';
import type { Filter } from './filter';
import type { Field, FieldGroup } from './field';

export type FilterProviderProps = {
    fields: FieldGroup[] | Field[];
    filters: Filter[];
}

export type FilterProviderEmits = (e: 'update:filters', filters: Filter[]) => void

export type FilterContext<P extends FilterProviderProps> = {
    fields: Ref<P['fields']>;
    filters: Ref<P['filters']>;
    clearFilters: () => void;
}

export const [injectFilterContext, provideFilterContext] = createContext<FilterContext<FilterProviderProps>>('FilterContext');
</script>

<script setup lang="ts">
const props = defineProps<FilterProviderProps>();

const filters = defineModel<Filter[]>('filters', { default: () => [] });

const { fields } = toRefs(props);

provideFilterContext({
    fields,
    filters,
    clearFilters() {
        filters.value = [];
    },
});
</script>

<template>
    <Primitive as="div" class="flex flex-wrap items-center gap-2">
        <slot />
    </Primitive>
</template>