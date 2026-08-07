<script setup lang="ts">
import { Clipboard, type ClipboardRootProviderProps } from "@ark-ui/vue/clipboard";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ClipboardRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Clipboard.RootProvider
    v-bind="rootProviderProps"
    :class="cn(
      'flex w-full max-w-xs flex-col gap-1.5 text-foreground',
      props.class,
    )"
    data-slot="clipboard-root-provider"
  >
    <slot />
  </Clipboard.RootProvider>
</template>
