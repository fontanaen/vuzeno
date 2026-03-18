<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { InputGroup } from "@vuzeno/ui/components/input-group";
import { cn } from "@vuzeno/ui/lib/utils";
import { ColorFieldRoot, type ColorFieldRootEmits, type ColorFieldRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

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
    <InputGroup :class="cn('relative', props.class)">
      <slot />
    </InputGroup>
  </ColorFieldRoot>
</template>