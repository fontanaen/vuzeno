<script setup lang="ts">
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { Input } from "../input";

const modelValue = defineModel<string | number>({ default: (props) => props.defaultValue });

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
}>();
</script>

<template>
  <Input
    v-model="modelValue"
    size="md"
    data-slot="input-group-control"
    :class="cn(
      'flex-1 rounded-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent ring-offset-transparent dark:bg-transparent',
      props.class,
    )"
  />
</template>
