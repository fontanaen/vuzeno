<script setup lang="ts">
import { Listbox, type ListboxLabelProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.Label
    v-bind="labelProps"
    :class="cn(
      'text-sm font-medium leading-5 text-foreground select-none',
      props.class,
    )"
    data-slot="listbox-label"
  >
    <slot />
  </Listbox.Label>
</template>
