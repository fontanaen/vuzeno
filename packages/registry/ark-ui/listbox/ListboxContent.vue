<script setup lang="ts">
import { Listbox, type ListboxContentProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxContentProps & { class?: HTMLAttributes["class"] }>();

const contentProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.Content
    v-bind="contentProps"
    :class="cn(
      'flex flex-col rounded-md border border-border bg-popover p-1 outline-none',
      'max-h-72 overflow-y-auto scrollbar-thin [scrollbar-color:var(--border)_var(--popover)]',
      '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:rounded [&::-webkit-scrollbar]:bg-popover',
      '[&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-border',
      'data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:max-w-max',
      'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:overflow-y-hidden',
      '[--column-count]:grid [--column-count]:max-h-none [--column-count]:max-w-max [--column-count]:gap-1 [--column-count]:overflow-visible [--column-count]:p-2',
      '[--column-count]:grid-cols-[repeat(var(--column-count),minmax(0,1fr))]',
      '[--column-count]:[&_[data-slot=listbox-item]]:flex [--column-count]:[&_[data-slot=listbox-item]]:size-10',
      '[--column-count]:[&_[data-slot=listbox-item]]:items-center [--column-count]:[&_[data-slot=listbox-item]]:justify-center',
      '[--column-count]:[&_[data-slot=listbox-item]]:rounded-md [--column-count]:[&_[data-slot=listbox-item]]:text-xl',
      '[--column-count]:[&_[data-slot=listbox-item]]:outline-none [--column-count]:[&_[data-slot=listbox-item]]:select-none',
      '[--column-count]:[&_[data-slot=listbox-item]:hover]:bg-muted',
      '[--column-count]:[&_[data-slot=listbox-item][data-highlighted]]:outline',
      '[--column-count]:[&_[data-slot=listbox-item][data-highlighted]]:outline-2',
      '[--column-count]:[&_[data-slot=listbox-item][data-highlighted]]:-outline-offset-2',
      '[--column-count]:[&_[data-slot=listbox-item][data-highlighted]]:outline-primary',
      '[--column-count]:[&_[data-slot=listbox-item][data-state=checked]]:bg-[var(--demo-coral-subtle)]',
      '[--column-count]:[&_[data-slot=listbox-item][data-disabled]]:opacity-50',
      props.class,
    )"
    data-slot="listbox-content"
  >
    <slot />
  </Listbox.Content>
</template>
