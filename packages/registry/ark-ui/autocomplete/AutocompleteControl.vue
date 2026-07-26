<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "../input-group";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Combobox.Control
    as-child
    data-slot="autocomplete-control"
  >
    <InputGroup.Root :class="cn('relative', props.class)">
      <slot />
    </InputGroup.Root>
  </Combobox.Control>
</template>
