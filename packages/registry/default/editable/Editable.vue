<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@vuzeno/ui/lib/utils";
import { EditableRoot, type EditableRootEmits, type EditableRootProps, useForwardPropsEmits } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<EditableRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <EditableRoot v-bind="forwarded" :class="cn('relative', props.class)" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </EditableRoot>
</template>