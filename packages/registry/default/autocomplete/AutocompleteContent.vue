<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { ComboboxList } from "@vuzeno/ui/components/combobox";
import { cn } from "@vuzeno/ui/lib/utils";
import type { ComboboxContentEmits, ComboboxContentProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
    } & ComboboxContentProps
  >(),
  {
    align: "start",
    sideOffset: 8,
  },
);

const emits = defineEmits<ComboboxContentEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ComboboxList v-bind="forwarded" :class="cn('min-w-[200px] border border-accent', props.class)">
    <slot />
  </ComboboxList>
</template>