<script setup lang="ts">
import { Button } from '@vuetella/ui/components/button';
import { DropdownMenuTrigger } from '@vuetella/ui/components/dropdown-menu';
import { ListFilterPlusIcon } from 'lucide-vue-next';

</script>

<template>
    <DropdownMenuTrigger as-child>
        <slot>
            <Button class="size-8" variant="outline" size="icon" aria-label="Filter">
                <ListFilterPlusIcon />
            </Button>
        </slot>
    </DropdownMenuTrigger>
</template>