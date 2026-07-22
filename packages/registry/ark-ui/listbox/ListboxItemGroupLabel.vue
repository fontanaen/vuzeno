<script setup lang="ts">
import { Listbox, type ListboxItemGroupLabelProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxItemGroupLabelProps & { class?: HTMLAttributes["class"] }>();

const itemGroupLabelProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.ItemGroupLabel
    v-bind="itemGroupLabelProps"
    :class="cn(
      'px-2 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase',
      props.class,
    )"
    data-slot="listbox-item-group-label"
  >
    <slot />
  </Listbox.ItemGroupLabel>
</template>
