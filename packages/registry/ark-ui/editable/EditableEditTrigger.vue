<script setup lang="ts">
import { Editable, type EditableEditTriggerProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends EditableEditTriggerProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.EditTrigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="editable-edit-trigger"
  >
    <slot />
  </Editable.EditTrigger>
</template>
