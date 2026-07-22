<script setup lang="ts">
import { Avatar, type AvatarRootProviderProps } from "@ark-ui/vue/avatar";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

interface Props extends AvatarRootProviderProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

const rootProviderProps = reactiveOmit(props, "class");
</script>

<template>
  <Avatar.RootProvider
    v-bind="rootProviderProps"
    :class="cn(props.class)"
    data-slot="avatar-root-provider"
  >
    <slot />
  </Avatar.RootProvider>
</template>
