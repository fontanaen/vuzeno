<script setup lang="ts">
import { ark, type PolymorphicProps } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import type { ButtonGroupVariantsProps } from ".";
import { buttonGroupVariants } from ".";

interface Props extends PolymorphicProps, ButtonGroupVariantsProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  orientation: "horizontal",
});
</script>

<template>
  <ark.fieldset
    data-slot="button-group"
    :as-child="asChild"
    :class="cn(buttonGroupVariants({ orientation }), props.class)"
  >
    <slot />
  </ark.fieldset>
</template>
