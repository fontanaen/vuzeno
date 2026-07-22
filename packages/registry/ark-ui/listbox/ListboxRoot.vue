<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Listbox, type ListboxRootEmits, type ListboxRootProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ListboxRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Listbox.Root
    v-bind="forwarded"
    :class="cn(
      'group/listbox flex w-full flex-col gap-1.5 text-foreground',
      'data-[orientation=vertical]:max-w-64',
      props.class,
    )"
    data-slot="listbox"
  >
    <slot />
  </Listbox.Root>
</template>
