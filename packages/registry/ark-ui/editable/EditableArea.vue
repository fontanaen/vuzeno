<script setup lang="ts">
import { Editable, type EditableAreaProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableAreaProps & { class?: HTMLAttributes["class"] }>();

const areaProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.Area
    v-bind="areaProps"
    :class="cn(
      'relative flex min-w-0 flex-1 items-start',
      '[&:has(textarea)_[data-slot=editable-preview]]:min-h-20',
      '[&:has(textarea)_[data-slot=editable-preview]]:leading-6',
      '[&:has(textarea)_[data-slot=editable-preview]]:whitespace-pre-wrap',
      props.class,
    )"
    data-slot="editable-area"
  >
    <slot />
  </Editable.Area>
</template>
