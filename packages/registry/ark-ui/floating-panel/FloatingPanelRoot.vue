<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { FloatingPanel, type FloatingPanelRootEmits, type FloatingPanelRootProps } from "@ark-ui/vue/floating-panel";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<FloatingPanelRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<FloatingPanelRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <FloatingPanel.Root
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="floating-panel"
  >
    <slot />
  </FloatingPanel.Root>
</template>
