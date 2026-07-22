<script setup lang="ts">
import { Editable, type EditableSubmitTriggerProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends EditableSubmitTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.SubmitTrigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="editable-submit-trigger"
  >
    <slot />
  </Editable.SubmitTrigger>
</template>
