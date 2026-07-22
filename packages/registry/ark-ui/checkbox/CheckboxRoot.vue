<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Checkbox, type CheckboxRootEmits, type CheckboxRootProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<CheckboxRootEmits>();

const rootProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(rootProps, emits);
</script>

<template>
  <Checkbox.Root
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center align-middle gap-2 relative',
      'data-disabled:cursor-not-allowed data-disabled:opacity-50',
      props.class
    )"
    data-slot="checkbox-root"
  >
    <slot />
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
