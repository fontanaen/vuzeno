<script setup lang="ts">
import { Listbox } from "@ark-ui/vue/listbox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Listbox.ItemContext
    
    :class="cn(props.class)"
    data-slot="listbox-item-context"
  >
    <slot />
  </Listbox.ItemContext>
</template>
