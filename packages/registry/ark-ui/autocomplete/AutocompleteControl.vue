<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Control
    
    :class="cn('relative', props.class)"
    data-slot="autocomplete-control"
  >
    <slot />
  </Combobox.Control>
</template>
