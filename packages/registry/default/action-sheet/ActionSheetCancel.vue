<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Button, type ButtonVariants } from "@vuzeno/ui/components/button";
import { ButtonGroup } from "@vuzeno/ui/components/button-group";
import { cn } from "@vuzeno/ui/lib/utils";
import type { PrimitiveProps } from "reka-ui";
import { useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { injectActionSheetContext } from "./ActionSheet.vue";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "lg",
});

const delegated = reactiveOmit(props, "class");
const forwarded = useForwardProps(delegated);

const context = injectActionSheetContext();
</script>

<template>
  <ButtonGroup class="w-full">
    <Button v-bind="forwarded" :class="cn('w-full text-destructive h-12', props.class)" @click="context.onCancel()">
      <slot />
    </Button>
  </ButtonGroup>
</template>