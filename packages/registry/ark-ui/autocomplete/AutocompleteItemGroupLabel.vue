<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.ItemGroupLabel
    
    :class="cn(
      'px-2 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase',
      props.class,
    )"
    data-slot="autocomplete-item-group-label"
  >
    <slot />
  </Combobox.ItemGroupLabel>
</template>
