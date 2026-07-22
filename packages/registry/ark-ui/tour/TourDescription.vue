<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Description
    :class="cn(
      'm-0 text-sm leading-normal text-muted-foreground',
      props.class,
    )"
    data-slot="tour-description"
  />
</template>
