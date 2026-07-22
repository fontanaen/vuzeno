<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.ItemContext
    
    :class="cn(props.class)"
    data-slot="autocomplete-item-context"
  >
    <slot />
  </Combobox.ItemContext>
</template>
