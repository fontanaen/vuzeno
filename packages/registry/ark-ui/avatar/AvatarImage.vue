<script setup lang="ts">
import { Avatar } from "@ark-ui/vue/avatar";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";



const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Avatar.Image
    
    :class="cn(props.class)"
    data-slot="avatar-image"
  >
    <slot />
  </Avatar.Image>
</template>
