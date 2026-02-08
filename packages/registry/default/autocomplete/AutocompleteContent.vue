<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import { reactiveOmit } from "@vueuse/core";
import type { ComboboxContentEmits, ComboboxContentProps } from "reka-ui";
import { useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { ComboboxList } from "@/components/ui/combobox";

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
  <ComboboxList v-bind="forwarded" :class="cn('min-w-[200px]', props.class)">
    <slot />
  </ComboboxList>
</template>