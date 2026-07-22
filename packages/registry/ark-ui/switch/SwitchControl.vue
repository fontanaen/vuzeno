<script setup lang="ts">
import { Switch, type SwitchControlProps } from "@ark-ui/vue/switch";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectSwitchContext } from "./context";
import { switchControlVariants } from "./variants";

const props = defineProps<SwitchControlProps & { class?: HTMLAttributes["class"] }>();

const controlProps = reactiveOmit(props, "class");
const { size } = injectSwitchContext();
</script>

<template>
  <Switch.Control
    v-bind="controlProps"
    :class="cn(switchControlVariants({ size }), props.class)"
    data-slot="switch-control"
  >
    <slot />
  </Switch.Control>
</template>
