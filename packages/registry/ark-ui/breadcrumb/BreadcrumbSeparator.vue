<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import { ChevronRightIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ark.li
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-separator"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <ChevronRightIcon />
    </slot>
  </ark.li>
</template>
