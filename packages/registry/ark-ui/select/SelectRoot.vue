<script setup lang="ts" generic="T">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Select, type SelectRootEmits, type SelectRootProps } from "@ark-ui/vue/select";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SelectRootProps<T> & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<SelectRootEmits<T>>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Select.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="select"
  >
    <slot />

    <Select.HiddenSelect />
  </Select.Root>
</template>
