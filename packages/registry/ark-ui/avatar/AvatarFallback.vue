<script setup lang="ts">
import { Avatar } from "@ark-ui/vue/avatar";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Avatar.Fallback
    :class="cn('text-xs bg-muted', props.class)"
    data-slot="avatar-fallback"
  >
    <slot />
  </Avatar.Fallback>
</template>
