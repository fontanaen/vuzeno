<script setup lang="ts">
import { Select } from "@ark-ui/vue/select";
import { cn } from "cnfast";
import { CheckIcon } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Select.ItemIndicator
    :hidden="false"
    :class="cn(
      'flex shrink-0 items-center justify-center text-primary',
      '[&_svg]:size-4',
      'data-[state=unchecked]:opacity-0',
      props.class
    )"
    data-slot="select-item-indicator"
  >
    <slot>
      <CheckIcon />
    </slot>
  </Select.ItemIndicator>
</template>
