<script setup lang="ts">
import { isVNode, type VNode } from "vue";

defineProps<{
  render?: VNode | string;
}>();
</script>

<template>
  <component v-if="isVNode(render)" :is="render" />
  <template v-else-if="render !== undefined">{{ render }}</template>
  <slot v-else />
</template>