<script setup lang="ts">
import { ButtonGroup } from "@vuzeno/ui/components/button-group";
import { cn } from "@vuzeno/ui/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <ButtonGroup
    orientation="vertical"
    aria-label="Action sheet option group"
    :class="cn('w-full', props.class)"
  >
    <slot />
  </ButtonGroup>
</template>