<script setup lang="ts">
import { RadioGroup } from "@ark-ui/vue/radio-group";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <RadioGroup.ItemContext
    
    :class="cn(props.class)"
    data-slot="radio-group-item-context"
  >
    <slot />
  </RadioGroup.ItemContext>
</template>
