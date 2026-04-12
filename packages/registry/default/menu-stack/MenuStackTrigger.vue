<script setup lang="ts">
import { DialogTrigger } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <DialogTrigger :class="props.class">
    <slot />
  </DialogTrigger>
</template>