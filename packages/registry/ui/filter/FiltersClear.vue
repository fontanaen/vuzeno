<script setup lang="ts">
import { Button } from '@vuetella/ui/components/button';
import { FunnelXIcon } from 'lucide-vue-next';
import { injectFilterContext } from './FilterProvider.vue';

const { clearFilters } = injectFilterContext();
</script>

<template>
    <Button class="size-8" variant="outline" size="icon" aria-label="Filter" @click="clearFilters">
        <FunnelXIcon />
    </Button>
</template>