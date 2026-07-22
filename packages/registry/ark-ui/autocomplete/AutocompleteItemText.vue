<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.ItemText
    :class="cn('flex-1 overflow-hidden text-ellipsis whitespace-nowrap', props.class)"
    data-slot="autocomplete-item-text"
  >
    <slot />
  </Combobox.ItemText>
</template>
