<script setup lang="ts">
import { Listbox, type ListboxItemProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.Item
    v-bind="itemProps"
    :class="cn(
      'flex min-h-8 items-center justify-between gap-2 rounded px-2 text-sm leading-5 outline-none select-none',
      '[&:hover:not([data-disabled])]:bg-muted data-highlighted:bg-muted',
      'data-[state=checked]:text-[var(--demo-coral-fg)]',
      'data-disabled:opacity-50 data-disabled:grayscale',
      'group-data-[orientation=horizontal]/listbox:relative group-data-[orientation=horizontal]/listbox:flex-col',
      'group-data-[orientation=horizontal]/listbox:min-h-0 group-data-[orientation=horizontal]/listbox:gap-1',
      'group-data-[orientation=horizontal]/listbox:p-2',
      'group-data-[orientation=horizontal]/listbox:data-[state=checked]:text-foreground',
      'group-data-[orientation=horizontal]/listbox:data-[state=checked]:outline',
      'group-data-[orientation=horizontal]/listbox:data-[state=checked]:outline-2',
      'group-data-[orientation=horizontal]/listbox:data-[state=checked]:-outline-offset-2',
      'group-data-[orientation=horizontal]/listbox:data-[state=checked]:outline-primary',
      'group-data-[orientation=horizontal]/listbox:[&>img]:size-[150px]',
      'group-data-[orientation=horizontal]/listbox:[&>img]:rounded',
      'group-data-[orientation=horizontal]/listbox:[&>img]:object-cover',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(3)]:max-w-[150px]',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(3)]:truncate',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(3)]:text-sm',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(3)]:font-medium',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(3)]:text-foreground',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(4)]:max-w-[150px]',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(4)]:truncate',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(4)]:text-xs',
      'group-data-[orientation=horizontal]/listbox:[&>span:nth-child(4)]:text-muted-foreground',
      props.class,
    )"
    data-slot="listbox-item"
  >
    <slot />
  </Listbox.Item>
</template>
