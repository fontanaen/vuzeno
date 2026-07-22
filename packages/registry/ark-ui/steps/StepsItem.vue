<script setup lang="ts">
import { Steps, type StepsItemProps } from "@ark-ui/vue/steps";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<StepsItemProps & { class?: HTMLAttributes["class"] }>();

const itemProps = reactiveOmit(props, "class");
</script>

<template>
  <Steps.Item
    v-bind="itemProps"
    :class="cn(
      'relative flex flex-1 items-center gap-3',
      'last:flex-none last:**:data-[part=separator]:hidden',
      'data-[orientation=vertical]:items-start',
      props.class,
    )"
    data-slot="steps-item"
  >
    <slot />
  </Steps.Item>
</template>
