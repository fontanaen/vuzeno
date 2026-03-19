<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import { Button } from "@vuzeno/ui/components/button";
import { cn } from "@vuzeno/ui/lib/utils";
import { PencilIcon } from "lucide-vue-next";
import { EditableEditTrigger, type EditableEditTriggerProps, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<EditableEditTriggerProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <EditableEditTrigger v-bind="forwarded" as-child :class="cn('relative', props.class)">
    <slot>
      <Button variant="ghost" size="icon-sm" class="size-7">
        <PencilIcon class="size-4" />
      </Button>
    </slot>
  </EditableEditTrigger>
</template>