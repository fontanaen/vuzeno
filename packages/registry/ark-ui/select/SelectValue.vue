<script setup lang="ts">
import { ark } from "@ark-ui/vue/factory";
import { type SelectValueTextProps, useSelectContext } from "@ark-ui/vue/select";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<SelectValueTextProps & { class?: HTMLAttributes["class"] }>();
const select = useSelectContext();
</script>
<template>
  <ark.span
    v-bind="select.getValueTextProps()"
    :as-child="props.asChild"
    :class="cn('overflow-hidden text-ellipsis whitespace-nowrap', props.class)"
    data-slot="select-value-text"
  >
    <slot>{{ select.valueAsString || props.placeholder }}</slot>
  </ark.span>
</template>