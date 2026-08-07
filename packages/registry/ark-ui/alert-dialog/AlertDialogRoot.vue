<script setup lang="ts">
import { useForwardPropsEmits } from "@ark-ui/vue";
import { Dialog, type DialogRootEmits, type DialogRootProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<DialogRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<DialogRootEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Dialog.Root
    v-bind="forwarded"
    role="alertdialog"
    :class="cn(props.class)"
    data-slot="dialog"
  >
    <slot />
  </Dialog.Root>
</template>
