<script setup lang="ts">
import FiltersDropdownMenu from './FiltersDropdownMenu.vue';
import FiltersDropdownMenuContent from './FiltersDropdownMenuContent.vue';
import FiltersDropdownMenuTrigger from './FiltersDropdownMenuTrigger.vue';
</script>

<template>
    <FiltersDropdownMenu>
        <FiltersDropdownMenuTrigger>
            <slot />
        </FiltersDropdownMenuTrigger>

        <FiltersDropdownMenuContent />
    </FiltersDropdownMenu>
</template>