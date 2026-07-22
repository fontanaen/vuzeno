<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { ColorFieldRoot, type ColorFieldRootEmits, type ColorFieldRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { InputGroup } from "../../ark-ui/input-group";

const props = defineProps<
  ColorFieldRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<ColorFieldRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ColorFieldRoot v-bind="forwarded">
    <InputGroup.Root :class="cn('relative', props.class)">
      <slot />
    </InputGroup.Root>
  </ColorFieldRoot>
</template>