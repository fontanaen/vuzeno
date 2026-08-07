<script setup lang="ts">
import { Checkbox, type CheckboxRootProviderProps } from "@ark-ui/vue/checkbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<CheckboxRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Checkbox.RootProvider
    v-bind="rootProviderProps"
    :class="cn('inline-flex items-center align-middle gap-2 relative', props.class)"
    data-slot="checkbox-root-provider"
  >
    <slot />
    <Checkbox.HiddenInput />
  </Checkbox.RootProvider>
</template>
