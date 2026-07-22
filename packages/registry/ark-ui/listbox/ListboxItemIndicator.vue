<script setup lang="ts">
import { Listbox, type ListboxItemIndicatorProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxItemIndicatorProps & { class?: HTMLAttributes["class"] }>();

const itemIndicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.ItemIndicator
    v-bind="itemIndicatorProps"
    :class="cn(
      'flex shrink-0 items-center justify-center text-primary [&_svg]:size-3.5',
      'group-data-[orientation=horizontal]/listbox:absolute group-data-[orientation=horizontal]/listbox:top-3',
      'group-data-[orientation=horizontal]/listbox:right-3 group-data-[orientation=horizontal]/listbox:size-5',
      'group-data-[orientation=horizontal]/listbox:rounded-full',
      'group-data-[orientation=horizontal]/listbox:bg-primary',
      'group-data-[orientation=horizontal]/listbox:text-white',
      'group-data-[orientation=horizontal]/listbox:[&_svg]:size-3',
      props.class,
    )"
    data-slot="listbox-item-indicator"
  >
    <slot />
  </Listbox.ItemIndicator>
</template>
