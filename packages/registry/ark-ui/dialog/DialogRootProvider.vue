<script setup lang="ts">
import { Dialog, type DialogRootProviderProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DialogRootProviderProps & { class?: HTMLAttributes["class"] }>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Dialog.RootProvider
    v-bind="rootProviderProps"
    :class="cn(props.class)"
    data-slot="dialog-root-provider"
  >
    <slot />
  </Dialog.RootProvider>
</template>
