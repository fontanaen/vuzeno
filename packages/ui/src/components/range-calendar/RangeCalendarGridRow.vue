<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core";
import type { RangeCalendarGridRowProps } from "reka-ui";
import { RangeCalendarGridRow, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<RangeCalendarGridRowProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RangeCalendarGridRow :class="cn('flex mt-2 w-full', props.class)" v-bind="forwardedProps">
    <slot />
  </RangeCalendarGridRow>
</template>
