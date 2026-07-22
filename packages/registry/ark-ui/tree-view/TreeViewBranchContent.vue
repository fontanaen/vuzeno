<script setup lang="ts">
import { TreeView, type TreeViewBranchContentProps } from "@ark-ui/vue/tree-view";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";

const props = defineProps<TreeViewBranchContentProps & { class?: HTMLAttributes["class"] }>();

const branchContentProps = reactiveOmit(props, "class");
</script>

<template>
  <TreeView.BranchContent
    v-bind="branchContentProps"
    :class="cn('relative', props.class)"
    data-slot="tree-view-branch-content"
  >
    <slot />
  </TreeView.BranchContent>
</template>

<style scoped>
[data-state="open"] {
  animation: expand-height 150ms ease-out, fade-in 150ms ease-out;
}

[data-state="closed"] {
  animation: collapse-height 150ms ease-out, fade-out 150ms ease-out;
}

:global([data-animate="false"]) [data-state="open"],
:global([data-animate="false"]) [data-state="closed"] {
  animation: none;
}

@keyframes expand-height {
  from {
    height: 0;
  }
  to {
    height: var(--height);
  }
}

@keyframes collapse-height {
  from {
    height: var(--height);
  }
  to {
    height: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
