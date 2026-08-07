<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { PinInput, type PinInputRootEmits, type PinInputRootProps } from "@ark-ui/vue/pin-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PinInputRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<PinInputRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <PinInput.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="pin-input"
  >
    <slot />
  </PinInput.Root>
</template>
