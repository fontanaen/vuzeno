<script setup lang="ts">
import { Fieldset, type FieldsetRootProviderProps } from "@ark-ui/vue/fieldset";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FieldsetRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Fieldset.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex min-w-0 flex-col gap-3 border-none p-0 m-0 text-foreground',
      props.class,
    )"
    data-slot="fieldset-root-provider"
  >
    <slot />
  </Fieldset.RootProvider>
</template>
