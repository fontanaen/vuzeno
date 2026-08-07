<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.List
    
    :class="cn(props.class)"
    data-slot="autocomplete-list"
  >
    <slot />
  </Combobox.List>
</template>
