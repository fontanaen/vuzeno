<script setup lang="ts">
import { Switch, type SwitchThumbProps } from "@ark-ui/vue/switch";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectSwitchContext } from "./context";
import { switchThumbVariants } from "./variants";

const props = defineProps<SwitchThumbProps & { class?: HTMLAttributes["class"] }>();

const thumbProps = reactiveOmit(props, "class");
const { size } = injectSwitchContext();
</script>

<template>
  <Switch.Thumb
    v-bind="thumbProps"
    :class="cn(switchThumbVariants({ size }), props.class)"
    data-slot="switch-thumb"
  >
    <slot />
  </Switch.Thumb>
</template>
