<script setup lang="ts">
import { Popover, type PopoverDescriptionProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverDescriptionProps & { class?: HTMLAttributes["class"] }>();

const descriptionProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Description
    v-bind="descriptionProps"
    :class="cn('m-0 text-sm leading-normal text-muted-foreground', props.class)"
    data-slot="popover-description"
  >
    <slot />
  </Popover.Description>
</template>
