<script setup lang="ts">
import { useImage } from '@vueuse/core';
import { toRefs, type HTMLAttributes } from 'vue';
import { injectImageContext } from './Image.vue';

const props = defineProps<{
    src: string
    alt?: string
    class?: HTMLAttributes["class"]
}>()

const { src } = toRefs(props)

const { state, setState } = injectImageContext()

useImage(() => ({
  src: src.value,
}), {
    onSuccess() {
        setState('success')
    },
    onError() {
        setState('error')
    }
})
</script>

<template>
    <img v-if="state === 'success'" :src="src" :alt="alt" :class="props.class" />
</template>