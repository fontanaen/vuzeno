<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core";
import { ChevronLeft } from "lucide-vue-next";
import type { CalendarPrevProps } from "reka-ui";
import { CalendarPrev, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { buttonVariants } from "#/components/button";
import { cn } from "#/lib/utils";

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronLeft class="h-4 w-4" />
    </slot>
  </CalendarPrev>
</template>
