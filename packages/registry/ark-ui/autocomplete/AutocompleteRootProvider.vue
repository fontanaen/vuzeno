<script setup lang="ts" generic="T">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Combobox, type ComboboxRootProviderEmits, type ComboboxRootProviderProps } from "@ark-ui/vue/combobox";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<ComboboxRootProviderProps<T> & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<ComboboxRootProviderEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Combobox.RootProvider
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="autocomplete-root-provider"
  >
    <slot />
  </Combobox.RootProvider>
</template>
