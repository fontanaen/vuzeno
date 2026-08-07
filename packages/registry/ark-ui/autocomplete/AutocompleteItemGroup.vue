<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.ItemGroup
    
    :class="cn('flex flex-col [&+&]:mt-2', props.class)"
    data-slot="autocomplete-item-group"
  >
    <slot />
  </Combobox.ItemGroup>
</template>
