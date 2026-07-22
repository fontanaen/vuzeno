<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { RadioGroup, type RadioGroupRootEmits, type RadioGroupRootProps } from "@ark-ui/vue/radio-group";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<RadioGroupRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RadioGroup.Root
    v-bind="forwarded"
    :class="cn(
      'flex flex-col gap-2 text-foreground',
      'data-disabled:opacity-50 data-disabled:grayscale',
      props.class,
    )"
    data-slot="radio-group"
  >
    <slot />
  </RadioGroup.Root>
</template>
