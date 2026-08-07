<script setup lang="ts">
import { Switch, type SwitchLabelProps } from "@ark-ui/vue/switch";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectSwitchContext } from "./context";
import { switchLabelVariants } from "./variants";

const props = defineProps<SwitchLabelProps & { class?: HTMLAttributes["class"] }>();

const labelProps = reactiveOmit(props, "class");
const { size } = injectSwitchContext();
</script>

<template>
  <Switch.Label
    v-bind="labelProps"
    :class="cn(switchLabelVariants({ size }), props.class)"
    data-slot="switch-label"
  >
    <slot />
  </Switch.Label>
</template>
