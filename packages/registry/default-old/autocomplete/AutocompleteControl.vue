<script setup lang="ts">
import { cn } from "cnfast";
import { ComboboxAnchor } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "../../ark-ui/input-group";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ComboboxAnchor>
    <InputGroup.Root :class="cn(props.class)">
      <slot />
    </InputGroup.Root>
  </ComboboxAnchor>
</template>