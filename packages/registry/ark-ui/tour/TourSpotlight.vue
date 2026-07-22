<script setup lang="ts">
import { Tour } from "@ark-ui/vue/tour";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Tour.Spotlight
    :class="cn('rounded', props.class)"
    data-slot="tour-spotlight"
  >
    <slot />
  </Tour.Spotlight>
</template>
