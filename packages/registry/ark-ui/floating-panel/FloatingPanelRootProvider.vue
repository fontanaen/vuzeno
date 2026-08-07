<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { FloatingPanel, type FloatingPanelRootProviderEmits, type FloatingPanelRootProviderProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FloatingPanelRootProviderProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<FloatingPanelRootProviderEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <FloatingPanel.RootProvider
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="floating-panel-root-provider"
  >
    <slot />
  </FloatingPanel.RootProvider>
</template>
