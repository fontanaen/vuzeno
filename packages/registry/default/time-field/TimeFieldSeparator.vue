<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span :class="cn('text-muted-foreground text-sm pb-0.5', props.class)">
    <slot>
      :
    </slot>
  </span>
</template>