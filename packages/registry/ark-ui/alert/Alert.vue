<script setup lang="ts">
import { ark } from "@ark-ui/vue";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { toRef } from "vue";
import { provideAlertContext } from "./context";
import type { AlertVariants } from "./index";
import { alertVariants } from "./index";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    variant?: AlertVariants["variant"];
  }>(),
  {
    variant: "default",
  },
);

provideAlertContext({
  variant: toRef(props, "variant"),
});
</script>

<template>
  <ark.div
    role="alert"
    data-slot="alert"
    :class="cn(alertVariants({ variant }), props.class)"
  >
    <slot />
  </ark.div>
</template>
