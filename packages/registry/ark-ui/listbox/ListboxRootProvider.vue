<script setup lang="ts">
import { Listbox, type ListboxRootProviderProps } from "@ark-ui/vue/listbox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ListboxRootProviderProps & { class?: HTMLAttributes["class"] }>();

const providerProps = reactiveOmit(props, "class");
</script>

<template>
  <Listbox.RootProvider
    v-bind="providerProps"
    :class="cn(
      'group/listbox flex w-full flex-col gap-1.5 text-foreground',
      'data-[orientation=vertical]:max-w-64',
      props.class,
    )"
    data-slot="listbox-root-provider"
  >
    <slot />
  </Listbox.RootProvider>
</template>
