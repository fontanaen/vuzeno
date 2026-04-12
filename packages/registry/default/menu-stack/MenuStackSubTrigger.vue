<script setup lang="ts">
import { ChevronRightIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import { MenuStackItem } from ".";
import { injectMenuSubStackContext } from "./MenuStackSub.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const ctx = injectMenuSubStackContext();
</script>

<template>
  <MenuStackItem :class="props.class" @click.prevent="ctx.toggleOpen()">
    <slot />
    <ChevronRightIcon class="size-4 ml-auto z-10 transition-transform duration-200" :class="ctx.open.value ? 'rotate-90' : ''" />
  </MenuStackItem>
</template>