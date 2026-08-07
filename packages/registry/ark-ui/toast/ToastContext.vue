<script setup lang="ts">
import { Toast } from "@ark-ui/vue/toast";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Toast.Context
    
    :class="cn(props.class)"
    data-slot="toast-context"
  >
    <slot />
  </Toast.Context>
</template>
