<script setup lang="ts">
import { Checkbox } from "@ark-ui/vue/checkbox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Checkbox.Group
    
    :class="cn('flex flex-col gap-2', props.class)"
    data-slot="checkbox-group"
  >
    <slot />
  </Checkbox.Group>
</template>
