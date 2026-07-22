<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Collapsible, type CollapsibleRootEmits, type CollapsibleRootProps } from "@ark-ui/vue/collapsible";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CollapsibleRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<CollapsibleRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Collapsible.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col gap-2 w-88 max-w-[calc(100vw-8rem)] text-foreground',
      props.class,
    )"
    data-slot="collapsible"
  >
    <slot />
  </Collapsible.Root>
</template>
