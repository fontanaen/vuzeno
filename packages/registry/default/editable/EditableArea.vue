<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { EditableArea, type EditableAreaProps, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableAreaProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <EditableArea v-bind="forwarded" :class="cn('relative', props.class)">
    <slot />
  </EditableArea>
</template>