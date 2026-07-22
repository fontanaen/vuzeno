<script setup lang="ts">
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Switch.HiddenInput
    :class="cn(props.class)"
    data-slot="switch-hidden-input"
  >
    <slot />
  </Switch.HiddenInput>
</template>
