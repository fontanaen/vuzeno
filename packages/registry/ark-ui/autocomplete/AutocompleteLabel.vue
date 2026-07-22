<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Label
    
    :class="cn(
      'text-sm leading-5 font-medium text-foreground select-none',
      props.class,
    )"
    data-slot="autocomplete-label"
  >
    <slot />
  </Combobox.Label>
</template>
