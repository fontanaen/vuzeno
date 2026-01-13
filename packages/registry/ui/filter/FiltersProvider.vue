<script lang="ts">
import { createContext } from 'reka-ui';
import { toRefs, type Ref } from 'vue';
import type { Filter } from './filter';
import type { Field, FieldGroup } from './field';

export type FilterVariant = 'outline' | 'secondary';
export type FilterSize = 'sm' | 'default' | 'lg';
export type FilterRounded = 'default' | 'full';

export type FilterProviderProps = {
    fields: FieldGroup[] | Field[];
    filters: Filter[];
    variant?: FilterVariant;
    size?: FilterSize;
    rounded?: FilterRounded;
}

export type FilterProviderEmits = (e: 'update:filters', filters: Filter[]) => void

export type FilterContext<P extends FilterProviderProps> = {
    fields: Ref<P['fields']>;
    filters: Ref<P['filters']>;
    variant: Ref<NonNullable<P['variant']>>;
    size: Ref<NonNullable<P['size']>>;
    rounded: Ref<NonNullable<P['rounded']>>;
    clearFilters: () => void;
}

export const [injectFilterContext, provideFilterContext] = createContext<FilterContext<FilterProviderProps>>('FiltersContext');
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<FilterProviderProps>(), {
    variant: 'outline',
    size: 'default',
    rounded: 'default',
});

const filters = defineModel<Filter[]>('filters', { default: () => [] });

const { fields, variant, size, rounded } = toRefs(props);

provideFilterContext({
    fields,
    filters,
    variant,
    size,
    rounded,
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