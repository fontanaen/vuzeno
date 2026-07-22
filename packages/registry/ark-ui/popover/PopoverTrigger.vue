<script setup lang="ts">
import { Popover, type PopoverTriggerProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverTriggerProps & { class?: HTMLAttributes["class"] }>();

const triggerProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Trigger
    v-bind="triggerProps"
    :class="cn(props.class)"
    data-slot="popover-trigger"
  >
    <slot />
  </Popover.Trigger>
</template>
