<script setup lang="ts">
import { Checkbox, type CheckboxGroupProviderProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxGroupProviderProps & { class?: HTMLAttributes["class"] }>();

const groupProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Checkbox.GroupProvider
    v-bind="groupProviderProps"
    :class="cn('flex flex-col gap-2', props.class)"
    data-slot="checkbox-group-provider"
  >
    <slot />
  </Checkbox.GroupProvider>
</template>
