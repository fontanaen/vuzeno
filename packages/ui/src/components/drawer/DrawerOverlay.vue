<script lang="ts" setup>
import { reactiveOmit } from "@vueuse/core";
import type { DialogOverlayProps } from "reka-ui";
import { DrawerOverlay } from "vaul-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<DialogOverlayProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DrawerOverlay v-bind="delegatedProps" :class="cn('fixed inset-0 z-50 bg-black/80', props.class)" />
</template>
