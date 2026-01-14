<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { RadioGroupRootEmits, RadioGroupRootProps } from "reka-ui";
import { RadioGroupRoot, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<RadioGroupRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <RadioGroupRoot
    :class="cn('grid gap-2', props.class)"
    v-bind="forwarded"
  >
    <slot />
  </RadioGroupRoot>
</template>
