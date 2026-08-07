<script setup lang="ts">
import { Editable, type EditableControlProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.Control
    v-bind="controlProps"
    :class="cn(
      'flex shrink-0 items-center gap-2',
      props.class,
    )"
    data-slot="editable-control"
  >
    <slot />
  </Editable.Control>
</template>
