<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Separator } from "@vuzeno/registry/ui/separator";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<{
    orientation?: "horizontal" | "vertical";
    class?: HTMLAttributes["class"];
  }>(),
  {
    orientation: "vertical",
  },
);

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <Separator
    data-slot="button-group-separator"
    v-bind="delegatedProps"
    :orientation="props.orientation"
    :class="cn(
      'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
      props.class,
    )"
  />
</template>
