<script setup lang="ts" generic="T">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Combobox, type ComboboxRootEmits, type ComboboxRootProps } from "@ark-ui/vue/combobox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ComboboxRootProps<T> & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ComboboxRootEmits<T>>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Combobox.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="autocomplete"
  >
    <slot />
  </Combobox.Root>
</template>
