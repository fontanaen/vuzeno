<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Empty
    :class="cn(
      'flex items-center justify-between gap-2 rounded-sm p-2 text-sm leading-5 outline-none select-none',
      props.class,
    )"
    data-slot="autocomplete-empty"
  >
    <slot />
  </Combobox.Empty>
</template>
