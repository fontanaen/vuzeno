<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { EditableInput, type EditableInputProps, useForwardProps } from "reka-ui";
import { type HTMLAttributes } from "vue";

const props = defineProps<EditableInputProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <EditableInput v-bind="forwarded" :class="cn('w-fit focus:outline-none', props.class)">
    <slot />
  </EditableInput>
</template>