<script setup lang="ts">
import { InputGroup } from "@vuzeno/ui/components/input-group";
import { cn } from "@vuzeno/ui/lib/utils";
import { ComboboxAnchor } from "reka-ui";
import type { HTMLAttributes } from "vue";

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