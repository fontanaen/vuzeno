<script setup lang="ts">
import { cn } from "@vuetella/ui/lib/utils";
import { ComboboxAnchor } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "@/components/ui/input-group";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ComboboxAnchor>
    <InputGroup :class="cn(props.class)">
      <slot />
    </InputGroup>
  </ComboboxAnchor>
</template>