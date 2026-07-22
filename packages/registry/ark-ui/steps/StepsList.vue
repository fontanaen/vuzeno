<script setup lang="ts">
import { Steps, type StepsListProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsListProps & { class?: HTMLAttributes["class"] }>();

const listProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.List
    v-bind="listProps"
    :class="cn(
      'flex flex-row items-center justify-between',
      'data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start',
      props.class,
    )"
    data-slot="steps-list"
  >
    <slot />
  </Steps.List>
</template>
