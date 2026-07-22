<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { PasswordInput, type PasswordInputContextProps } from "@ark-ui/vue/password-input";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends PasswordInputContextProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps);
</script>

<template>
  <PasswordInput.Context
    v-bind="forwarded"
    :class="cn(props.class)"
    data-slot="password-input-context"
  >
    <slot />
  </PasswordInput.Context>
</template>
