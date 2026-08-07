<script setup lang="ts">
import { Listbox, type ListboxItemGroupProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxItemGroupProps & { class?: HTMLAttributes["class"] }>();

const itemGroupProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.ItemGroup
    v-bind="itemGroupProps"
    :class="cn(
      'flex flex-col [&+&]:mt-2',
      props.class,
    )"
    data-slot="listbox-item-group"
  >
    <slot />
  </Listbox.ItemGroup>
</template>
