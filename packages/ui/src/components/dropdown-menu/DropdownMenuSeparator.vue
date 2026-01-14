<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { DropdownMenuSeparatorProps } from "reka-ui";
import { DropdownMenuSeparator } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<
  DropdownMenuSeparatorProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <DropdownMenuSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" />
</template>
