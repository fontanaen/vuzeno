<script setup lang="ts">
import { Combobox } from "@ark-ui/vue/combobox";
import type { HTMLAttributes } from "vue";
import { InputGroup, type InputGroupInputProps } from "../input-group";

interface AutocompleteInputProps extends InputGroupInputProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AutocompleteInputProps>();
</script>

<template>
  <Combobox.Input
    as-child
    data-slot="autocomplete-input"
  >
    <InputGroup.Input :size="props.size" :class="props.class">
      <slot />
    </InputGroup.Input>
  </Combobox.Input>
</template>
