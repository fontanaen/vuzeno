<script setup lang="ts">
import { Marquee } from "@ark-ui/vue/marquee";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Marquee.Context
    
    :class="cn(props.class)"
    data-slot="marquee-context"
  >
    <slot />
  </Marquee.Context>
</template>
