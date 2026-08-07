<script setup lang="ts">
import { Checkbox, type CheckboxIndicatorProps } from "@ark-ui/vue/checkbox";
import { CheckIcon, MinusIcon } from "@lucide/vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxIndicatorProps & { class?: HTMLAttributes["class"] }>();

const indicatorProps = reactiveOmit(props, "class");
</script>

<template>
  <Checkbox.Indicator
    v-bind="indicatorProps"
    :class="cn('flex items-center justify-center [&>svg]:text-primary-foreground', props.class)"
    data-slot="checkbox-indicator"
  >
    <slot>
      <MinusIcon v-if="indeterminate" class="size-4" />
      <CheckIcon v-else class="size-4" />
    </slot>
  </Checkbox.Indicator>
</template>
