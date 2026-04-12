<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";
import { injectMenuSubStackContext } from "./MenuStackSub.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const ctx = injectMenuSubStackContext();
</script>

<template>
  <div v-if="ctx.open.value" data-slot="menu-stack-sub-content" :class="cn('', props.class)">
    <slot />
  </div>
</template>