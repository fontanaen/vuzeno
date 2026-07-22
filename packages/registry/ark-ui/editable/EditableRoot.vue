<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Editable, type EditableRootEmits, type EditableRootProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<EditableRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Editable.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-96 items-center gap-2 text-foreground',
      'data-disabled:opacity-50',
      props.class,
    )"
    data-slot="editable"
  >
    <slot />
  </Editable.Root>
</template>
