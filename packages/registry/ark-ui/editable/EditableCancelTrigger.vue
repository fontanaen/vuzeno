<script setup lang="ts">
import { Editable, type EditableCancelTriggerProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends EditableCancelTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.CancelTrigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="editable-cancel-trigger"
  >
    <slot />
  </Editable.CancelTrigger>
</template>
