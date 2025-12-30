<script setup lang="ts">
import { injectImageContext } from './Image.vue';

const { state } = injectImageContext()
</script>

<template>
    <slot v-if="['loading', 'error'].includes(state)" />
</template>