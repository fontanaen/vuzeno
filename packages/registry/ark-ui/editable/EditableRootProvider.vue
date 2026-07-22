<script setup lang="ts">
import { Editable, type EditableRootProviderProps } from "@ark-ui/vue/editable";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Editable.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-96 items-center gap-2 text-foreground',
      'data-disabled:opacity-50',
      props.class,
    )"
    data-slot="editable-root-provider"
  >
    <slot />
  </Editable.RootProvider>
</template>
