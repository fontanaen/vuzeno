<script setup lang="ts">
import { Collapsible } from "@ark-ui/vue/collapsible";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Collapsible.Context
    
    :class="cn(props.class)"
    data-slot="collapsible-context"
  >
    <slot />
  </Collapsible.Context>
</template>
