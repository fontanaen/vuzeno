<script setup lang="ts">
import { Checkbox, type CheckboxContextProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Checkbox.Context
    :class="cn(props.class)"
    data-slot="checkbox-context"
    v-slot="checkbox"
  >
    <slot v-bind="checkbox" />
  </Checkbox.Context>
</template>
