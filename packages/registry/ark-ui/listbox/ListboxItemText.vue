<script setup lang="ts">
import { Listbox, type ListboxItemTextProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxItemTextProps & { class?: HTMLAttributes["class"] }>();

const itemTextProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.ItemText
    v-bind="itemTextProps"
    :class="cn(
      'flex-1 overflow-hidden text-ellipsis whitespace-nowrap',
      props.class,
    )"
    data-slot="listbox-item-text"
  >
    <slot />
  </Listbox.ItemText>
</template>
