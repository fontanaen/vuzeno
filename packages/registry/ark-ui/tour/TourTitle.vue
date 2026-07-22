<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Title
    :class="cn(
      'm-0 text-[15px] font-semibold leading-[1.4] text-foreground',
      props.class,
    )"
    data-slot="tour-title"
  />
</template>
