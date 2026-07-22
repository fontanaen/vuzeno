<script setup lang="ts">
import { JsonTreeView, type JsonTreeViewTreeProps } from "@ark-ui/vue/json-tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import { ChevronRightIcon } from "lucide-vue-next";
import { type HTMLAttributes, useSlots } from "vue";

const props = withDefaults(defineProps<JsonTreeViewTreeProps & { class?: HTMLAttributes["class"] }>(), { indentGuide: true });

const slots = useSlots();
const treeProps = reactiveOmit(props, "class");
</script>

<template>
  <JsonTreeView.Tree
    v-bind="treeProps"
    :class="cn(
      'flex flex-col font-mono text-xs leading-[1.8]',
      '[&_svg]:size-4',
      '**:data-[type=string]:text-(--json-string)',
      '**:data-[type=number]:text-(--json-number)',
      '**:data-[type=boolean]:font-semibold **:data-[type=boolean]:text-(--json-boolean)',
      '**:data-[type=null]:font-semibold **:data-[type=null]:italic **:data-[type=null]:text-(--json-muted)',
      '**:data-[type=undefined]:font-semibold **:data-[type=undefined]:italic **:data-[type=undefined]:text-(--json-muted)',
      '**:data-[type=function]:italic **:data-[type=function]:text-(--json-boolean)',
      '**:data-[type=date]:text-(--json-number)',
      '**:data-[type=error]:font-medium **:data-[type=error]:text-(--json-string)',
      '**:data-[type=regex]:text-(--json-accent)',
      '**:data-[kind=brace]:font-bold **:data-[kind=brace]:text-foreground',
      '**:data-[kind=key]:font-medium **:data-[kind=key]:text-(--json-key)',
      '**:data-[kind=colon]:mx-1 **:data-[kind=colon]:text-(--json-muted)',
      '**:data-[kind=preview-text]:italic **:data-[kind=preview-text]:text-(--json-muted)',
      '**:data-[kind=constructor]:font-medium **:data-[kind=constructor]:text-(--json-accent)',
      props.class,
    )"
    data-slot="json-tree-view-tree"
  >
    <template #arrow>
      <slot name="arrow">
        <ChevronRightIcon />
      </slot>
    </template>
    <template v-if="slots.indentGuide" #indentGuide>
      <slot name="indentGuide" />
    </template>
    <template v-if="slots.renderValue" #renderValue="slotProps">
      <slot name="renderValue" v-bind="slotProps" />
    </template>
  </JsonTreeView.Tree>
</template>
