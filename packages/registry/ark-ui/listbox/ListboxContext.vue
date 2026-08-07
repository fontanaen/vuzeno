<script setup lang="ts">
import { Listbox } from "@ark-ui/vue/listbox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Listbox.Context
    :class="cn(props.class)"
    data-slot="listbox-context"
    v-slot="context"
  >
    <slot v-bind="context" />
  </Listbox.Context>
</template>
