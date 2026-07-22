<script setup lang="ts">
import { Clipboard } from "@ark-ui/vue/clipboard";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { type InputVariantsProps, inputVariants } from "../input";

interface Props extends InputVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <Clipboard.Input
    :class="cn(inputVariants({ size: props.size }), props.class)"
    data-slot="clipboard-input"
  />
</template>
