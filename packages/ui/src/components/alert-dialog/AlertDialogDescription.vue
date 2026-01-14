<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { AlertDialogDescriptionProps } from "reka-ui";
import { AlertDialogDescription } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "#/lib/utils";

const props = defineProps<AlertDialogDescriptionProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AlertDialogDescription
    v-bind="delegatedProps"
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </AlertDialogDescription>
</template>
