<script setup lang="ts">
import { Listbox, type ListboxValueTextProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxValueTextProps & { class?: HTMLAttributes["class"] }>();

const valueTextProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.ValueText
    v-bind="valueTextProps"
    :class="cn(
      'font-normal text-foreground',
      props.class,
    )"
    data-slot="listbox-value-text"
  />
</template>
