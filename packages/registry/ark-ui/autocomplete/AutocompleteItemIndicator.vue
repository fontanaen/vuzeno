<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { CheckIcon } from "@lucide/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.ItemIndicator
    :hidden="false"
    :class="cn(
      'flex shrink-0 items-center justify-center text-primary',
      '[&_svg]:size-4',
      'data-[state=unchecked]:opacity-0',
      props.class,
    )"
  >
    <slot>
      <CheckIcon />
    </slot>
  </Combobox.ItemIndicator>
</template>
