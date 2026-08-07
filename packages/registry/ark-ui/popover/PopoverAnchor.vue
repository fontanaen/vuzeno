<script setup lang="ts">
import { Popover, type PopoverAnchorProps } from "@ark-ui/vue/popover";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<PopoverAnchorProps & { class?: HTMLAttributes["class"] }>();

const anchorProps = reactiveOmit(props, "class");
</script>

<template>
  <Popover.Anchor
    v-bind="anchorProps"
    :class="cn('inline-flex', props.class)"
    data-slot="popover-anchor"
  >
    <slot />
  </Popover.Anchor>
</template>
