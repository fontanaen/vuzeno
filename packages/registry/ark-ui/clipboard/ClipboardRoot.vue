<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Clipboard, type ClipboardRootEmits, type ClipboardRootProps } from "@ark-ui/vue/clipboard";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends ClipboardRootProps {
  rootClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const emits = defineEmits<ClipboardRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Clipboard.Root
    v-bind="forwarded"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-1.5 text-foreground',
      props.rootClass,
    )"
    data-slot="clipboard"
  >
    <Clipboard.Control :class="cn('flex items-center gap-2', props.class)" data-slot="clipboard-control">
      <slot />
    </Clipboard.Control>
  </Clipboard.Root>
</template>
