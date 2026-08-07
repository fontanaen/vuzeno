<script setup lang="ts">
import { Listbox, type ListboxEmptyProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxEmptyProps & { class?: HTMLAttributes["class"] }>();

const emptyProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.Empty
    v-bind="emptyProps"
    :class="cn(
      'flex items-center justify-center px-4 py-6 text-sm text-muted-foreground',
      props.class,
    )"
    data-slot="listbox-empty"
  >
    <slot />
  </Listbox.Empty>
</template>
